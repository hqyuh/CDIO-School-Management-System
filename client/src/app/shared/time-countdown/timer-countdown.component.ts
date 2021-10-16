import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { range, timer, zip } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service'

@Component({
  selector: 'app-timer-countdown',
  templateUrl: './timer-countdown.component.html',
  styleUrls: ['./timer-countdown.component.scss'],
  providers: [DestroyableService]
})
export class TimerCountdownComponent implements OnInit {
  @Input() value: number;
  @Output('onComplete') timerOver: EventEmitter<any> = new EventEmitter<any>();
  public timerValue;
  @Output() getTimeLeft: EventEmitter<any> = new EventEmitter<any>();
  public areTenSecsRemainings: boolean = false;
  constructor(private destroyableService: DestroyableService){}
  public ngOnInit() {
    let source$ = zip(
      range(0, this.value),
      timer(0, 1000)
    ).pipe(takeUntil(this.destroyableService.destroy$),map(([x])=>{
      return this.value - x;
    }));
    source$.subscribe(
      (seconds: any) => {
        console.log(seconds);
        let mins: number = parseInt('' + seconds / 60);
        let secs: number = seconds % 60;
        let hrs = parseInt('' + mins / 60);
        mins = mins % 60;
        if (secs < 11) this.areTenSecsRemainings = true;
        let res = {
          hours: hrs,
          minutes: mins,
          seconds: secs,
        };
        this.timerValue = res;
      },
      console.log,
      () => this.timerOver.emit('TIMER OVER')
    );
  }
}
