import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzListComponent } from './pages/quizz-list/quizz-list.component';
import { TableModule } from 'primeng/table';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import {  ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    QuizzListComponent,
    ExamPageComponent,
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    QuizzRoutingModule,
    TableModule,
    NgbTooltipModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    QuizzListComponent
  ]
})
export class QuizzModule { }
