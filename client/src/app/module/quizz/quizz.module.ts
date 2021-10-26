import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzRoutingModule } from './quizz-routing.module';
import { QuizzListComponent } from './pages/quizz-list/quizz-list.component';
import { TableModule } from 'primeng/table';
import { NgbModalModule, NgbTimepickerModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ExamPageComponent } from './pages/exam-page/exam-page.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ReactiveFormsModule } from '@angular/forms';
import {  ButtonModule } from 'primeng/button';
import { NgxsModule } from '@ngxs/store';
import { QuizzState } from './service/quizz.state';
import { SubjectState } from '../subject/service/subject.state';
import { CreateQuizzModalComponent } from './components/create-quizz-modal/create-quizz-modal.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateQuizzModalComponent } from './components/update-quizz-modal/update-quizz-modal.component';
import { DeleteQuizzModalComponent } from './components/delete-quizz-modal/delete-quizz-modal.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TimerCountdownModule } from 'src/app/shared/time-countdown/timer-countdown.module';
import { ExamFulfilledPageComponent } from './pages/exam-fulfilled-page/exam-fulfilled-page.component';
import { EditableQuestionPageComponent } from './pages/editable-question-page/editable-question-page.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CreateQuestionFormComponent } from './components/create-question-form/create-question-form.component';
import { DirectiveModule } from 'src/app/core/directive/directive.module';
@NgModule({
  declarations: [
    QuizzListComponent,
    ExamPageComponent,
    QuestionFormComponent,
    CreateQuizzModalComponent,
    UpdateQuizzModalComponent,
    DeleteQuizzModalComponent,
    ExamFulfilledPageComponent,
    EditableQuestionPageComponent,
    CreateQuestionFormComponent
  ],
  imports: [
    CommonModule,
    QuizzRoutingModule,
    TableModule,
    NgbTooltipModule,
    RadioButtonModule,
    ReactiveFormsModule,
    ButtonModule,
    NgxsModule.forFeature([QuizzState, SubjectState]),
    NgSelectModule,
    NgbModalModule,
    NgbTimepickerModule,
    ConfirmDialogModule,
    TimerCountdownModule,
    SplitButtonModule,
    DirectiveModule
  ],
  exports: [
    QuizzListComponent
  ]
})
export class QuizzModule { }
