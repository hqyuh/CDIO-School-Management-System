import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { AnswerConstant } from '../../model/answer-request.model';
import { QuizzModel } from '../../model/quizz.model';
import { QuestionService } from '../../service/question.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.scss'],
  providers: [DestroyableService],
})
export class CreateQuestionFormComponent implements OnInit {
  @Select(QuizzState.selectedQuizz)
  public selectedQuizz$: Observable<QuizzModel>;
  public quizzId: number;
  public Answers: any;
  public createQuestionForm: FormGroup;
  constructor(
    private toastService: ToastrService,
    private formBuilder: FormBuilder,
    private destroyableService: DestroyableService,
    private questionService: QuestionService
  ) {}

  public ngOnInit(): void {
    this.Answers = AnswerConstant;
    this.createQuestionForm = this.formBuilder.group({
      result: [{ value: undefined }, [Validators.required]],
      mark: [{ value: undefined }, [Validators.required, Validators.min(0.1)]],
      text: [{ value: undefined }, [Validators.required]],
      answerA: [{ value: undefined }, [Validators.required]],
      answerB: [{ value: undefined }, [Validators.required]],
      answerC: [{ value: undefined }, [Validators.required]],
      answerD: [{ value: undefined }, [Validators.required]],
    });
    this.Text.setValue('');
    this.AnswerA.setValue('');
    this.AnswerB.setValue('');
    this.AnswerC.setValue('');
    this.AnswerD.setValue('');
    this.selectedQuizz$
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe((selectedQuizz) => {
        this.quizzId = selectedQuizz.id;
      });
  }

  public get Answer(): FormControl {
    return this.createQuestionForm.get('result') as FormControl;
  }

  public get Mark(): FormControl {
    return this.createQuestionForm.get('mark') as FormControl;
  }

  public get Text(): FormControl {
    return this.createQuestionForm.get('text') as FormControl;
  }

  public get AnswerA(): FormControl {
    return this.createQuestionForm.get('answerA') as FormControl;
  }

  public get AnswerB(): FormControl {
    return this.createQuestionForm.get('answerB') as FormControl;
  }

  public get AnswerC(): FormControl {
    return this.createQuestionForm.get('answerC') as FormControl;
  }

  public get AnswerD(): FormControl {
    return this.createQuestionForm.get('answerD') as FormControl;
  }

  public generatePlaceholder(answer: string): string {
    return `answer ${answer}`;
  }

  public createQuestion(): void {
    if (this.createQuestionForm.invalid) {
      this.toastService.error('Vui lòng điền đầy đủ các thông tin yêu cầu!');
    } else {
      this.questionService
        .createQuestion({
          ...this.createQuestionForm.value,
          testQuizzId: this.quizzId,
        })
        .pipe(takeUntil(this.destroyableService.destroy$))
        .subscribe({
          next: () => {
            this.toastService.success('Tạo câu hỏi thành công!');
          },
          error: () =>
            this.toastService.error(
              'Tạo câu hỏi thất bại, vui lòng thử lại sau!'
            ),
        });
    }
  }
}
