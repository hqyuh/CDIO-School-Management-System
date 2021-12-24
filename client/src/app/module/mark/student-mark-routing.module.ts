import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarkPageComponent } from './pages/student-mark-page/student-mark-page.component';

const routes: Routes = [
  {
    path: '',
    component: StudentMarkPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentMarkRoutingModule { }
