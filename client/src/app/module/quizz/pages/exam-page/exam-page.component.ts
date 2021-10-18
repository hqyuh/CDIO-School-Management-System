import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { QuizzModel } from '../../model/quizz.model';
import { QuizzService } from '../../service/quizz.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.scss'],
  providers: [DestroyableService],
})
export class ExamPageComponent implements OnInit {
  public exam: QuizzModel;
  @Select(QuizzState.selectedQuizz)
  public selectedQuizz$: Observable<QuizzModel>;
  constructor(
    private destroyableService: DestroyableService,
    private quizzService: QuizzService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.selectedQuizz$
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe((quizz) => {
        this.exam = quizz;
      });
  }

  public calculateQuizzMark(): void {
    this.quizzService
      .getQuizzMark(this.exam.id)
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe({
        next: (res) =>
          void this.router.navigate(['/home/quizz/exam/fulfilled'], {
            state: { mark: res.mark },
          }),
        error: () => {
          this.toastService.error('Nộp bài thất bại. Vui lòng thử lại!');
        },
      });
  }
}
