import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { AnswerRequestModel } from '../../model/answer-request.model';
import { QuestionModel } from '../../model/question.model';
import { QuizzService } from '../../service/quizz.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  providers: [DestroyableService]
})


export class QuestionFormComponent implements OnInit {
  public questionForm : any;
  @Input() question: QuestionModel;
  @Input() index: number;
  constructor(private formGroup: FormBuilder, private store: Store, private destroyableService: DestroyableService, private quizzService: QuizzService, private toastService: ToastrService) { } 

  public ngOnInit(): void {
    this.questionForm = this.formGroup.group({
      answer: [undefined,Validators.required]
    })
  }

  public get Answer(): FormControl {
    return this.questionForm.get('answer');
  }

  public onSelectAnswer(event: any){
    const answerSelected = event.target.value
    const selectedQuizzOnStore = this.store.selectSnapshot(QuizzState.selectedQuizz);
    this.quizzService.storeAnswer(new AnswerRequestModel(selectedQuizzOnStore.id, this.question.id, answerSelected)).subscribe({
      error: ()=> this.toastService.error('Đã có bất ngờ xảy ra. Vui lòng thử lại :(')
    })
  }

}
