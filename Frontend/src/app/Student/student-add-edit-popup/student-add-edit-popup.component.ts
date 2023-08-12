import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifyService } from 'src/app/Common/Services/notify.service';
import { StudentModel } from '../Student.Models';
@Component({
  selector: 'app-student-add-edit-popup',
  templateUrl: './student-add-edit-popup.component.html',
  styleUrls: ['./student-add-edit-popup.component.css'],
})
export class StudentAddEditPopupComponent implements OnInit {
  countries = ['Egypt', 'USA', 'UAE'];
  @Input() FirstName!: string;
  @Input() LastName!: string;
  @Input() Email!: string;
  @Input() Gender!: string;
  @Input() Country!: string;
  BirthDate: Date = new Date();
  genders = ['male', 'female'];
  FirstNameValid = true;
  constructor(
    private NgbActiveModal: NgbActiveModal,
    private NotifyService: NotifyService
  ) {}

  ngOnInit(): void {
    console.log(this.FirstName);
  }
  Save(frm: NgForm) {
    if (frm.invalid) {
      this.FirstNameValid = false;
      this.NotifyService.Error('Invalid Data');
      return;
    }
    const Student: StudentModel.StudentReqModel = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Gender: this.Gender,
      Country: this.Country,
      BirthDate: this.BirthDate,
    };
    console.log(Student);
  }
  closeModal() {
    this.NgbActiveModal.dismiss();
  }
}
