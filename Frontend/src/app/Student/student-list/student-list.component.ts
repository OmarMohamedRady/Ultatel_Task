import { Component, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentAddEditPopupComponent } from '../student-add-edit-popup/student-add-edit-popup.component';
import { StudentModel } from '../Student.Models';
import { HttpEndPoints } from 'src/app/Common/Settings/HttpEndPoints';
import { HttpService } from 'src/app/Common/Services/http.service';
import { NotifyService } from 'src/app/Common/Services/notify.service';

interface Country {
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  Country: string;
  DateOfBirth: string;
}

const COUNTRIES: Country[] = [
  {
    FirstName: 'omar',
    LastName: 'mohamed',
    Email: 'omar@gmail.com',
    Gender: 'male',
    Country: 'Egypt',
    DateOfBirth: '3-10-1997',
  },
  {
    FirstName: 'omar',
    LastName: 'mohamed',
    Email: 'omar@gmail.com',
    Gender: 'male',
    Country: 'Egypt',
    DateOfBirth: '3-10-1997',
  },
  {
    FirstName: 'omar',
    LastName: 'mohamed',
    Email: 'omar@gmail.com',
    Gender: 'male',
    Country: 'Egypt',
    DateOfBirth: '3-10-1997',
  },
  {
    FirstName: 'omar',
    LastName: 'mohamed',
    Email: 'omar@gmail.com',
    Gender: 'male',
    Country: 'Egypt',
    DateOfBirth: '3-10-1997',
  },
  {
    FirstName: 'omar',
    LastName: 'mohamed',
    Email: 'omar@gmail.com',
    Gender: 'male',
    Country: 'Egypt',
    DateOfBirth: '3-10-1997',
  },
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  page = 1;
  pageSize = 4;
  // collectionSize = COUNTRIES.length;
  collectionSize: any;
  countries: Country[] = [];
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
    this.refreshCountries();
  }
  ngAfterViewChecked() {
    this.ChangeDetectorRef.detectChanges();
  }
  refreshCountries() {
    this.countries = COUNTRIES.map((country, i) => ({
      id: i + 1,
      ...country,
    })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
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
    },
    DeleteStudent: (row: any) => {},
  };

  GetAllStudents() {
    const httpEndPoint = HttpEndPoints.Students.getAll;
    this.HttpService.GetAll(httpEndPoint).subscribe(
      (response) => {
        console.log(response);
        this.studentList = response;
        this.collectionSize = this.studentList.length;
      },
      (error) => {
        this.NotifyService.ServerError('Something went Wrong');
      }
    );
  }
}
