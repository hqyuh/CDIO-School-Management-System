import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { QuizzModel } from 'src/app/module/quizz/model/quizz.model';
import { SaveSelectedQuizz } from 'src/app/module/quizz/service/quizz.action';
import { ExamService } from '../service/exam.service';

@Component({
  selector: 'app-exam-code-page',
  templateUrl: './exam-code-page.component.html',
  styleUrls: ['./exam-code-page.component.scss'],
  providers: [DestroyableService]
})
export class ExamCodePageComponent implements OnInit {
  public examCode = new FormControl('', Validators.required)
  constructor(private store: Store, private examService: ExamService, private destroyableService: DestroyableService, private router: Router, private toastService: ToastrService) { }

  public ngOnInit(): void {
  }

  public exam(): void {
    if(this.examCode.valid){
    this.examService.getExam(this.examCode.value).pipe(takeUntil(this.destroyableService.destroy$)).subscribe({
      next: (quizz: QuizzModel)=> {
        this.store.dispatch(new SaveSelectedQuizz(quizz));
        void this.router.navigate(['/home/quizz/exam'])
      },
      error: ()=> {
        this.toastService.error('The exam code is invalid!')
      }
    })
    }
  }

  public get ExamCode(): FormControl {
    return this.examCode;
  }

}
