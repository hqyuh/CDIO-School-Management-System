import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guard/admin.guard';
import { ExamGuard } from 'src/app/core/guard/exam.guard';
import { TeacherGuard } from 'src/app/core/guard/teacher.guard';
import { EditableQuestionPageComponent } from './pages/editable-question-page/editable-question-page.component';
import { ExamFulfilledPageComponent } from './pages/exam-fulfilled-page/exam-fulfilled-page.component';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { QuizzListComponent } from './pages/quizz-list/quizz-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuizzListComponent,
      },
      {
        path: 'exam',
        children: [
          { 
            canActivate: [ExamGuard], 
            path: '', 
            component: ExamPageComponent },
          {
            path: 'fulfilled',
            component: ExamFulfilledPageComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'fulfilled',
          },
          {
            // canActivate: [TeacherGuard, AdminGuard],
            path: 'editing',
            component: EditableQuestionPageComponent,
          },
        ],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzRoutingModule {}
