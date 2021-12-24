import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMarkRoutingModule } from './student-mark-routing.module';

import { TableModule } from 'primeng/table';
import { NgxsModule } from '@ngxs/store';
import { QuizzState } from '../quizz/service/quizz.state';
import { SubjectState } from '../subject/service/subject.state';
import { StudentMarkPageComponent } from './pages/student-mark-page/student-mark-page.component';


@NgModule({
  declarations: [
    StudentMarkPageComponent
  ],
  imports: [
    CommonModule,
    StudentMarkRoutingModule,
    TableModule,
    NgxsModule.forFeature([QuizzState, SubjectState]),
  ]
})
export class StudentMarkModule { }
