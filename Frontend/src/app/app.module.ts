import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from 'src/app/Student/student-list/student-list.component';
import { StudentAddEditPopupComponent } from 'src/app/Student/student-add-edit-popup/student-add-edit-popup.component';
import { RoutePaths } from 'src/app/Common/Settings/RoutePaths';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe, NgFor, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddEditPopupComponent,
  ],
  // NgbModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
