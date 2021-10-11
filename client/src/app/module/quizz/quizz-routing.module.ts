import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
