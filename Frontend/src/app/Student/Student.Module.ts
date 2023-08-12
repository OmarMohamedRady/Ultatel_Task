import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddEditPopupComponent } from './student-add-edit-popup/student-add-edit-popup.component';
import { RoutePaths } from 'src/app/Common/Settings/RoutePaths';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

const routes: Routes = [
  {
    path: RoutePaths.StudentList,
    component: StudentListComponent,
  },
];

@NgModule({
  declarations: [StudentListComponent, StudentAddEditPopupComponent],
  imports: [
    RouterModule.forChild(routes),
    DecimalPipe,
    NgFor,
    FormsModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbDatepickerModule,
    NgSelectModule,
    CommonModule,
  ],
  providers: [],
})
export class StudentModule {}
