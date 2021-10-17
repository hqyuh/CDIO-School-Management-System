import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamGuard } from 'src/app/core/guard/exam.guard';
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
          { canActivate: [ExamGuard], path: '', component: ExamPageComponent },
          {
            path: 'fulfilled',
            component: ExamFulfilledPageComponent,
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'fulfilled',
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
