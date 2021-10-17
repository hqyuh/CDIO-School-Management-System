import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { SubjectState } from 'src/app/module/subject/service/subject.state';
import { TimerModel } from 'src/app/shared/model/ngbTimer.model';
import { ConvertTimeService } from 'src/app/shared/service/convert-time.service';
import { QuizzService } from '../../service/quizz.service';

@Component({
  selector: 'app-create-quizz-modal',
  templateUrl: './create-quizz-modal.component.html',
  styleUrls: ['./create-quizz-modal.component.scss'],
  providers: [DestroyableService, ConvertTimeService],
})
export class CreateQuizzModalComponent implements OnInit {
  public createQuizzForm: any;

  constructor(
    private modal: NgbModal,
    private formBuilder: FormBuilder,
    private destroyableService: DestroyableService,
    private toastService: ToastrService,
    private quizzService: QuizzService,
    private store: Store,
    private convertTimeService: ConvertTimeService
  ) {}

  public ngOnInit(): void {
    const examTimeInit: TimerModel = {
      hour: 1,
      minute: 0,
    };
    this.createQuizzForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      examTime: [examTimeInit, Validators.required],
    });
  }

  public get Name(): FormControl {
    return this.createQuizzForm.get('name');
  }

  public get Description(): FormControl {
    return this.createQuizzForm.get('description');
  }
  public get examTime(): FormControl {
    return this.createQuizzForm.get('examTime');
  }

  public openQuizzModal(content: TemplateRef<any>): void {
    this.modal.open(content, { size: 'md' });
  }

  public createQuizz(): void {
    const newQuizz = this.createQuizzForm.value;
    if (this.createQuizzForm.valid) {
      const selectedSubjectOnStore = this.store.selectSnapshot(
        SubjectState.getSelectedSubject
      );
      newQuizz.examTime = this.convertTimeService.convertTimerToSeconds(
        newQuizz.examTime
      );
      newQuizz.subject = selectedSubjectOnStore;
      delete newQuizz.subject.dateCreated;
      delete newQuizz.subject.teacher;
      this.quizzService
        .createQuizz(newQuizz)
        .pipe(takeUntil(this.destroyableService.destroy$))
        .subscribe({
          next: () =>
            this.toastService.success(
              'Bài thi đã được tạo dưới nền. Sẽ được cập nhật trong ít phút!'
            ),
          error: () =>
            this.toastService.error('Đã có lỗi xảy ra. Vui lòng thử lại sau!'),
        });
    }
  }
}
