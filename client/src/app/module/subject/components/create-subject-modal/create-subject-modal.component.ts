import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { TeacherModel } from 'src/app/shared/model/teacher.model';
import { TeacherService } from 'src/app/shared/service/teacher.service';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-create-subject-modal',
  templateUrl: './create-subject-modal.component.html',
  styleUrls: ['./create-subject-modal.component.scss'],
  providers: [DestroyableService],
})
export class CreateSubjectModalComponent implements OnInit {
  public createSubjectForm: any;
  public teachers: Observable<TeacherModel[]>;
  constructor(
    public activeModal: NgbActiveModal,
    private modal: NgbModal,
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private destroyableService: DestroyableService,
    private subjectService: SubjectService,
    private toastService: ToastrService
  ) {}

  public ngOnInit(): void {
    this.createSubjectForm = this.formBuilder.group({
      name: ['', Validators.required],
      teacher: ['', Validators.required],
    });
    this.teachers = this.teacherService
      .getAllTeacher()
      .pipe(takeUntil(this.destroyableService.destroy$));
  }
  public openCreateSubjectModal(content: TemplateRef<any>): void {
    this.modal.open(content, { size: 'md' });
  }

  public get Name(): FormControl {
    return this.createSubjectForm.get('name');
  }

  public get Teacher(): FormControl {
    return this.createSubjectForm.get('teacher');
  }

  public createSubject(): void {
    if (this.createSubjectForm.valid) {
      this.subjectService
        .createSubject(this.createSubjectForm.value)
        .pipe(takeUntil(this.destroyableService.destroy$))
        .subscribe({
          next: () => {
            this.toastService.success('Thêm môn học thành công!');
          },
          error: () => this.toastService.error('Thêm môn học thất bại'),
          complete: ()=> this.activeModal.close('cross click'),
        });
    }
  }
}
