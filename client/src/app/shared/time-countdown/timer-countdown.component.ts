import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { range, timer, zip } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { QuizzModel } from 'src/app/module/quizz/model/quizz.model';
import { QuizzService } from 'src/app/module/quizz/service/quizz.service';
import { QuizzState } from 'src/app/module/quizz/service/quizz.state';
import { ConvertTimeService } from '../service/convert-time.service';

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss'],
  providers: [DestroyableService, ConvertTimeService],
})
export class TimerCountdownComponent implements OnInit, OnDestroy {
  @Input() value: number;
  @Output('onComplete') timerOver: EventEmitter<any> = new EventEmitter<any>();
  public timerValue;
  public areTenSecsRemainings: boolean = false;
  constructor(
    private destroyableService: DestroyableService,
    private quizzService: QuizzService,
    private store: Store,
    private convertTimeService: ConvertTimeService,
    private toastService: ToastrService
  ) {}
  public ngOnInit() {
    const source$ = zip(range(0, this.value), timer(0, 1000)).pipe(
      takeUntil(this.destroyableService.destroy$),
      map(([x]) => {
        return this.value - x;
      })
    );
    source$.subscribe(
      (seconds: any) => {
        let mins: number = parseInt('' + seconds / 60);
        const secs: number = seconds % 60;
        const hrs = parseInt('' + mins / 60);
        mins = mins % 60;
        if (seconds < 60) {
          this.areTenSecsRemainings = true;
        }
        const res = {
          hour: hrs,
          minute: mins,
          second: secs,
        };
        this.timerValue = res;
      },
      console.log,
      () => this.timerOver.emit('TIMER OVER')
    );
  }
  public ngOnDestroy(): void {
    const selectedQuizzOnStore = this.store.selectSnapshot(
      QuizzState.selectedQuizz
    );
    selectedQuizzOnStore.examTime =
      this.convertTimeService.convertTimerToSeconds(this.timerValue);
    const quizzChangeExamTime: QuizzModel = {...selectedQuizzOnStore};
    delete quizzChangeExamTime.dateCreated;
    delete quizzChangeExamTime.subject.dateCreated;
    quizzChangeExamTime.questions.forEach((question)=>{
      delete question.dateCreated;
    })
    this.quizzService
      .updateQuizz(quizzChangeExamTime)
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe({
        next: () =>
          this.toastService.success(
            'Hãy quay lại và hoàn thành bài thi của bạn!'
          ),
        error: () => this.toastService.error('Đã có lỗi bất ngờ xảy ra!'),
      });
  }
}
