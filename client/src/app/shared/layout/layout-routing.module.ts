import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {TeacherGuard} from "../../core/guard/teacher.guard";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        canActivate: [TeacherGuard],
        path: 'subject',
        loadChildren: () =>
          import('../../module/subject/subject.module').then(
            (m) => m.SubjectModule
          ),
      },
      {
        path: 'quizz',
        loadChildren: () =>
          import('../../module/quizz/quizz.module').then((m) => m.QuizzModule),
      },
      {
        path: 'user-management',
        loadChildren: () => import('../../module/user-management/user-management.module').then(m=>m.UserManagementModule)
      },
      {
        path: 'exam-code',
        loadChildren: ()=> import('../../shared/exam-code-page/exam-code-page.module').then(m=>m.ExamCodePageModule)
      },
      {
        path: 'student-mark',
        loadChildren: ()=> import('../../module/mark/student-mark.module').then(m => m.StudentMarkModule)
      },
      {
        path: 'user/me',
        loadChildren: ()=> import('../../shared/account-management/account-management.module').then(m=>m.AccountManagementModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'subject',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayOutRoutingModule {}
