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
      answer: [{ value: undefined, disabled: this.editable }, [Validators.required]],
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
            message: 'Ba??n co?? th????t s???? mu????n xo??a c??u ho??i na??y kh??ng?',
            accept: () => {
              this.questionService
                .deleteQuestion(this.question.id)
                .pipe(takeUntil(this.destroyableService.destroy$))
                .subscribe({
                  next: () =>
                    this.toastService.success('Xo??a c??u ho??i tha??nh c??ng!'),
                  error: () =>
                    this.toastService.error(
                      'Xo??a c??u ho??i th????t ba??i, vui lo??ng th???? la??i!'
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
          this.toastService.error('??a?? co?? b????t ng???? xa??y ra. Vui lo??ng th???? la??i :('),
      });
  }
}
