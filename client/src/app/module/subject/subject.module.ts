import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectPageComponent } from './page/subject-page/subject-page.component';
import { NgxsModule } from '@ngxs/store';
import { SubjectState } from './service/subject.state';
import { CreateSubjectModalComponent } from './components/create-subject-modal/create-subject-modal.component';
import { ButtonModule } from 'primeng/button';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateSubjectModalComponent } from './components/update-subject-modal/update-subject-modal.component';
import { DeleteSubjectModalComponent } from './components/delete-subject-modal/delete-subject-modal.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [SubjectPageComponent, CreateSubjectModalComponent, UpdateSubjectModalComponent, DeleteSubjectModalComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    TableModule,
    ButtonModule,
    NgxsModule.forFeature([SubjectState]),
    NgbModalModule,
    ReactiveFormsModule,
    InputTextModule,
    NgSelectModule,
    FormsModule,
    ConfirmDialogModule,
  ],
  providers: [
    NgbActiveModal
  ]
})
export class SubjectModule {}
