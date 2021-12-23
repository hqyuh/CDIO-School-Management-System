import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamCodePageRoutingModule } from './exam-code-page-routing.module';
import { ExamCodePageComponent } from './exam-code-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { QuizzState } from 'src/app/module/quizz/service/quizz.state';
import { SubjectState } from 'src/app/module/subject/service/subject.state';


@NgModule({
  declarations: [
    ExamCodePageComponent
  ],
  imports: [
    CommonModule,
    ExamCodePageRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([QuizzState, SubjectState]),
  ]
})
export class ExamCodePageModule { }
