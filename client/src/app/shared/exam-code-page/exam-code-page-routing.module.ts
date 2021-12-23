import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from 'src/app/core/guard/student.guard';
import { ExamCodePageComponent } from './exam-code-page.component';

const routes: Routes = [
  {
    canActivate: [StudentGuard],
    path: '',
    component: ExamCodePageComponent
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
export class ExamCodePageRoutingModule { }
