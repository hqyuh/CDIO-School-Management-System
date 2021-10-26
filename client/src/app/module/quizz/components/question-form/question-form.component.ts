import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { AnswerRequestModel } from '../../model/answer-request.model';
import { QuestionModel } from '../../model/question.model';
import { QuestionService } from '../../service/question.service';
import { QuizzService } from '../../service/quizz.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  providers: [DestroyableService, ConfirmationService],
})
export class QuestionFormComponent implements OnInit {
  public questionForm: any;
  public menuItems: MenuItem[];
  public isEditing = false;
  @Input() public question: QuestionModel;
  @Input() public index: number;
  @Input() public editable: boolean;
  constructor(
    private formGroup: FormBuilder,
    private store: Store,
    private destroyableService: DestroyableService,
    private quizzService: QuizzService,
    private toastService: ToastrService,
    private confirmationService: ConfirmationService,
    private questionService: QuestionService
  ) {}

  public ngOnInit(): void {
    this.questionForm = this.formGroup.group({
      answer: [{ value: undefined, disabled: true }, [Validators.required]],
    });
    this.menuItems = [
      {
        label: 'Edit',
        icon: 'pi pi-refresh',
        command: () => {
          this.isEditing = !this.isEditing;
          this.isEditing === false
            ? this.Answer.disable()
            : this.Answer.enable();
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          this.confirmationService.confirm({
            message: 'Bạn có thật sự muốn xóa câu hỏi này không?',
            accept: () => {
              this.questionService
                .deleteQuestion(this.question.id)
                .pipe(takeUntil(this.destroyableService.destroy$))
                .subscribe({
                  next: () =>
                    this.toastService.success('Xóa câu hỏi thành công!'),
                  error: () =>
                    this.toastService.error(
                      'Xóa câu hỏi thất bại, vui lòng thử lại!'
                    ),
                });
            },
          });
        },
      },
    ];
  }

  public get Answer(): FormControl {
    return this.questionForm.get('answer');
  }

  public onSelectAnswer(isSelected: any) {
    const selectedQuizzOnStore = this.store.selectSnapshot(
      QuizzState.selectedQuizz
    );
    this.quizzService
      .storeAnswer(
        new AnswerRequestModel(
          selectedQuizzOnStore.id,
          this.question.id,
          isSelected
        )
      )
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe({
        error: () =>
          this.toastService.error('Đã có bất ngờ xảy ra. Vui lòng thử lại :('),
      });
  }
}
