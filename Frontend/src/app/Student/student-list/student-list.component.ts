import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentAddEditPopupComponent } from '../student-add-edit-popup/student-add-edit-popup.component';
import { HttpEndPoints } from 'src/app/Common/Settings/HttpEndPoints';
import { HttpService } from 'src/app/Common/Services/http.service';
import { NotifyService } from 'src/app/Common/Services/notify.service';
import { StudentModels } from '../Student.Models';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent {
  page = 1;
  pageSize = 4;
  collectionSize: any;
  studentList: any;
  List: any;

  constructor(
    private NgbModal: NgbModal,
    private HttpService: HttpService,
    private NotifyService: NotifyService
  ) {}
  ngOnInit() {
    this.GetAllStudents();
  }

  refreshStudents() {
    this.List = this.studentList
      .map((c: any) => ({
        ...c,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  Actions = {
    OpenAddEditStudent: (
      row: StudentModels.StudentModel = new StudentModels.StudentModel()
    ) => {
      const modal = this.NgbModal.open(StudentAddEditPopupComponent, {
        size: 'lg',
      });
      const student = Object.assign({}, row);
      // const student = JSON.parse(JSON.stringify(row));
      modal.componentInstance.Student = student;
      modal.result.then((row) => {
        this.GetAllStudents();
      });
    },
    DeleteStudent: (row: any) => {
      console.log(row);
      this.NotifyService.COnfirm(
        'Confirm Delete',
        'Confirm Delete Message',
        'Yes',
        'No'
      ).then((result) => {
        if (result) {
          let httpEndPoint = HttpEndPoints.Students.delete;
          httpEndPoint = httpEndPoint.replace('{id}', row._id);
          this.HttpService.Delete(httpEndPoint).subscribe(
            (response) => {
              this.GetAllStudents();
              this.NotifyService.Success('Student Deleted Successfully');
            },
            (error) => {
              this.NotifyService.Error('Something went Wrong');
            }
          );
        }
      });
    },
  };

  getStudentAge(year: number) {
    const today = new Date();
    const CurrentYear = +today.getFullYear();
    return CurrentYear - year;
  }
  GetAllStudents() {
    const httpEndPoint = HttpEndPoints.Students.getAll;
    const BirthDate = new Date();
    this.HttpService.GetAll(httpEndPoint).subscribe(
      (response) => {
        this.studentList = response;
        this.collectionSize = this.studentList.length;
        this.refreshStudents();
      },
      (error) => {
        this.NotifyService.Error('Something went Wrong');
      }
    );
  }
}
