import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  public questionForm : any;
  constructor(private formGroup: FormBuilder) { } 

  public ngOnInit(): void {
    this.questionForm = this.formGroup.group({
      answer: ['',Validators.required]
    })
  }

  public onSaveAnswer(): void{
    console.log(this.Answer.value);
    console.log(this.questionForm.valid);
  }

  public get Answer(): FormControl {
    return this.questionForm.get('answer');
  }

}
