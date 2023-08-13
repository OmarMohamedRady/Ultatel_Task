import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/Common/Services/notify.service';
import { StudentModels } from '../Student.Models';
import { HttpEndPoints } from 'src/app/Common/Settings/HttpEndPoints';
import { HttpService } from 'src/app/Common/Services/http.service';
@Component({
  selector: 'app-student-add-edit-popup',
  templateUrl: './student-add-edit-popup.component.html',
})
export class StudentAddEditPopupComponent implements OnInit {
  countries = ['Egypt', 'USA', 'China', 'Brazil'];

  @Input() Student!: StudentModels.StudentModel;

  constructor(
    private NgbActiveModal: NgbActiveModal,
    private NotifyService: NotifyService,
    private HttpService: HttpService
  ) {}

  ngOnInit(): void {}

  Save(frm: NgForm) {
    if (frm.invalid) {
      this.NotifyService.Error('Invalid Data');
      return;
    }
    const student: StudentModels.StudentReqModel = {
      FirstName: this.Student.FirstName,
      LastName: this.Student.LastName,
      Email: this.Student.Email,
      Gender: this.Student.Gender,
      BirthDate: this.Student.BirthDate,
      Country: this.Student.Country,
    };

    if (this.Student._id == null) {
      const httpEndPoint = HttpEndPoints.Students.create;
      this.HttpService.Post(httpEndPoint, student).subscribe(
        (response) => {
          if (response == 'student is already exist') {
            this.NotifyService.Error('student is already exist');
          } else {
            this.NotifyService.Success('Student Added Successfully');
            this.NgbActiveModal.close(this.Student);
          }
        },
        (error) => {
          this.NotifyService.Error('Something went Wrong');
        }
      );
    } else {
      let httpEndPoint = HttpEndPoints.Students.update;

      httpEndPoint = httpEndPoint.replace('{id}', this.Student._id);
      this.HttpService.Put(httpEndPoint, student).subscribe(
        (response) => {
          this.NotifyService.Success('Student Updated Successfully');
          this.NgbActiveModal.close(this.Student);
        },
        (error) => {
          this.NotifyService.Error('Something went Wrong');
        }
      );
    }
  }
  closeModal() {
    this.NgbActiveModal.dismiss();
  }
}
