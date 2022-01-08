import {Component, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {QuizzService} from "../../service/quizz.service";
import {Store} from "@ngxs/store";
import {QuizzState} from "../../service/quizz.state";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-exam-fulfilled-page',
  templateUrl: './exam-fulfilled-page.component.html',
  styleUrls: ['./exam-fulfilled-page.component.scss']
})
export class ExamFulfilledPageComponent implements OnDestroy{
  public mark: number;
  constructor(private router: Router, private quizzService: QuizzService, private store: Store, private toastService: ToastrService) {
    this.mark = this.router.getCurrentNavigation().extras.state?.mark;
   }

   public ngOnDestroy(): void {
    this.saveMark();
   }

  public saveMark(): void {
      const selectedQuizzOnStore = this.store.selectSnapshot(QuizzState.selectedQuizz);
      this.quizzService.saveMark(selectedQuizzOnStore.id,this.mark).subscribe({
        next: ()=> this.toastService.success('Congratulations on completing the test'),
        error: (err)=> this.toastService.error(err.message)
      })
   }
}
