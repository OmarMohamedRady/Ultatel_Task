import { Component, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentAddEditPopupComponent } from '../student-add-edit-popup/student-add-edit-popup.component';
import { HttpEndPoints } from 'src/app/Common/Settings/HttpEndPoints';
import { HttpService } from 'src/app/Common/Services/http.service';
import { NotifyService } from 'src/app/Common/Services/notify.service';

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
    private NotifyService: NotifyService,
    private ChangeDetectorRef: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.GetAllStudents();
  }
  ngAfterViewChecked() {
    this.ChangeDetectorRef.detectChanges();
  }

  refreshStudents() {
    this.List = this.studentList
      .map((c: any, i: any) => ({
        id: i + 1,
        ...c,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  Actions = {
    OpenAddEditStudent: (row: any = {}) => {
      const modal = this.NgbModal.open(StudentAddEditPopupComponent, {
        size: 'lg',
      });

      modal.componentInstance.StudentId = row._id;
      modal.componentInstance.FirstName = row.FirstName;
      modal.componentInstance.LastName = row.LastName;
      modal.componentInstance.Email = row.Email;
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
              this.NotifyService.ServerError('Something went Wrong');
            }
          );
        }
      });
    },
  };

  GetAllStudents() {
    const httpEndPoint = HttpEndPoints.Students.getAll;
    this.HttpService.GetAll(httpEndPoint).subscribe(
      (response) => {
        console.log(response);
        this.studentList = response;
        this.collectionSize = this.studentList.length;
        this.refreshStudents();
      },
      (error) => {
        this.NotifyService.ServerError('Something went Wrong');
      }
    );
  }
}
