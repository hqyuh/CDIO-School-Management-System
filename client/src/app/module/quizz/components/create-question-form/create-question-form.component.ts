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
import { AnswerConstant } from '../../model/answer-request.model';
import { QuizzModel } from '../../model/quizz.model';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-create-question-form',
  templateUrl: './create-question-form.component.html',
  styleUrls: ['./create-question-form.component.scss'],
})
export class CreateQuestionFormComponent implements OnInit {
  @Select(QuizzState.selectedQuizz)
  public selectedQuizz$: Observable<QuizzModel>;
  public Answers: any;
  public createQuestionForm: FormGroup;
  constructor(
    private store: Store,
    private toastService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.Answers = AnswerConstant;
    this.createQuestionForm = this.formBuilder.group({
      answer: [{ value: undefined }, [Validators.required]],
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
  }

  public get Answer(): FormControl {
    return this.createQuestionForm.get('answer') as FormControl;
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

  public generatePlaceholder(answer: string): string{
    return `answer ${answer}`;
  }
}
