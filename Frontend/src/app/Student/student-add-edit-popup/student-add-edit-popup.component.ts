import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/Common/Services/notify.service';
import { StudentModel } from '../Student.Models';
import { HttpEndPoints } from 'src/app/Common/Settings/HttpEndPoints';
import { HttpService } from 'src/app/Common/Services/http.service';
@Component({
  selector: 'app-student-add-edit-popup',
  templateUrl: './student-add-edit-popup.component.html',
})
export class StudentAddEditPopupComponent implements OnInit {
  countries = ['Egypt', 'USA', 'UAE'];
  @Input() StudentId!: string;
  @Input() FirstName!: string;
  @Input() LastName!: string;
  @Input() Email!: string;
  @Input() Gender!: string;
  @Input() Country!: string;

  BirthDate!: { year: number; month: number; day: number };
  genders = ['male', 'female'];

  constructor(
    private NgbActiveModal: NgbActiveModal,
    private NotifyService: NotifyService,
    private HttpService: HttpService,
    private ChangeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  ngAfterViewChecked() {
    this.ChangeDetectorRef.detectChanges();
  }
  Save(frm: NgForm) {
    if (frm.invalid) {
      this.NotifyService.Error('Invalid Data');
      return;
    }
    const student: StudentModel.StudentReqModel = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Gender: this.Gender,
      Country: this.Country,
      BirthDate: this.BirthDate,
    };

    if (this.StudentId == null) {
      const httpEndPoint = HttpEndPoints.Students.create;
      this.HttpService.Post(httpEndPoint, student).subscribe(
        (response) => {
          this.NotifyService.Success('Student Added Successfully');
          this.NgbActiveModal.close(student);
        },
        (error) => {
          this.NotifyService.ServerError('Something went Wrong');
        }
      );
    } else {
      let httpEndPoint = HttpEndPoints.Students.update;
      httpEndPoint = httpEndPoint.replace('{id}', this.StudentId);
      this.HttpService.Put(httpEndPoint, student).subscribe(
        (response) => {
          this.NotifyService.Success('Student Updated Successfully');
          this.NgbActiveModal.close(student);
        },
        (error) => {
          this.NotifyService.ServerError('Something went Wrong');
        }
      );
    }
  }
  closeModal() {
    this.NgbActiveModal.dismiss();
  }
}
