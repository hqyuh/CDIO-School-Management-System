import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamGuard } from 'src/app/core/guard/exam.guard';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { QuizzListComponent } from './pages/quizz-list/quizz-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: QuizzListComponent
      },
      {
        canActivate: [ExamGuard],
        path: 'exam',
        component: ExamPageComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzRoutingModule { }
