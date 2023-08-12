import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentAddEditPopupComponent } from '../student-add-edit-popup/student-add-edit-popup.component';

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
  collectionSize = COUNTRIES.length;
  countries: Country[] = [];
  constructor(private NgbModal: NgbModal) {
    this.refreshCountries();
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

  Actions = {
    OpenAddEditStudent: (country: any = {}) => {
      const modal = this.NgbModal.open(StudentAddEditPopupComponent, {
        size: 'lg',
      });
      modal.componentInstance.FirstName = country.FirstName;
      console.log(country);
    },
  };
}
