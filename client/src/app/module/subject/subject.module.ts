import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectPageComponent } from './page/subject-page/subject-page.component';
import { NgxsModule } from '@ngxs/store';
import { SubjectState } from './service/subject.state';
import { CreateSubjectModalComponent } from './components/create-subject-modal/create-subject-modal.component';
import { ButtonModule } from 'primeng/button';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [SubjectPageComponent, CreateSubjectModalComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    TableModule,
    ButtonModule,
    NgxsModule.forFeature([SubjectState]),
    NgbModalModule,
    ReactiveFormsModule,
    InputTextModule
  ],
})
export class SubjectModule {}
