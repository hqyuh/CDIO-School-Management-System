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
import { NgxsModule } from '@ngxs/store';
import { QuizzState } from './service/quizz.state';
import { SubjectState } from '../subject/service/subject.state';
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
    ButtonModule,
    NgxsModule.forFeature([QuizzState, SubjectState])
  ],
  exports: [
    QuizzListComponent
  ]
})
export class QuizzModule { }
