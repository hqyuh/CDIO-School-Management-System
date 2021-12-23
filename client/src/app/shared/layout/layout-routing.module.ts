import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
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
