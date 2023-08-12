import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePaths } from 'src/app/Common/Settings/RoutePaths';
import { StudentListComponent } from 'src/app/Student/student-list/student-list.component';
const routes: Routes = [
  {
    path: '',
    component: StudentListComponent,
  },
  {
    path: RoutePaths.StudentList,
    component: StudentListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
