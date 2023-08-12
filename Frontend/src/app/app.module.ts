import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { StudentListComponent } from './Student/student-list/student-list.component';
// import { StudentAddEditPopupComponent } from './Student/student-add-edit-popup/student-add-edit-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    // StudentListComponent,
    // StudentAddEditPopupComponent
  ],
  // NgbModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
