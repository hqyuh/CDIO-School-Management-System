import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { TeacherModel } from 'src/app/shared/model/teacher.model';
import { TeacherService } from 'src/app/shared/service/teacher.service';
import { SubjectModel } from '../../model/subject.model';
import { SubjectService } from '../../service/subject.service';
import { SubjectState } from '../../service/subject.state';

@Component({
  selector: 'app-update-subject-modal',
  templateUrl: './update-subject-modal.component.html',
  styleUrls: ['./update-subject-modal.component.scss'],
  providers: [DestroyableService],
})
export class UpdateSubjectModalComponent implements OnInit {
  public subject: SubjectModel;
  public updateSubjectForm: any;
  public teachers: Observable<TeacherModel[]>;

  constructor(
    private modal: NgbModal,
    private formBuilder: FormBuilder,
    private teacherService: TeacherService,
    private destroyableService: DestroyableService,
    private subjectService: SubjectService,
    private toastService: ToastrService,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.teachers = this.teacherService
      .getAllTeacher()
      .pipe(takeUntil(this.destroyableService.destroy$));
  }
  public openUpdateSubjectModal(content: TemplateRef<any>) {
    const selectedSubjectOnStore = this.store.selectSnapshot(
      SubjectState.getSelectedSubject
    );
    if (selectedSubjectOnStore === undefined) {
      this.toastService.warning('Hãy chọn môn học để cập nhật!');
    } else {
      this.modal.open(content, { size: 'md' });
      this.subject = selectedSubjectOnStore;
      this.updateSubjectForm = this.formBuilder.group({
        name: [this.subject?.name, Validators.required],
        teacher: [undefined, Validators.required],
      });
    }
  }

  public get Name(): FormControl {
    return this.updateSubjectForm.get('name');
  }

  public updateSubject(): void {
    if (this.updateSubjectForm.valid) {
      const newSubject = {...this.updateSubjectForm.value, id: this.subject.id};
      this.subjectService
        .updateSubject(newSubject)
        .pipe(takeUntil(this.destroyableService.destroy$))
        .subscribe({
          next: () => this.toastService.success('Cập nhật thành công!'),
          error: () => this.toastService.error('Đã có lỗi xảy ra!'),
        });
    }
  }
}
