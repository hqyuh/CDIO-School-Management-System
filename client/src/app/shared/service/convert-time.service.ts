import { Injectable } from '@angular/core';
import { TimerModel } from '../model/ngbTimer.model';

@Injectable()
export class ConvertTimeService {
  public convertTimerToSeconds(examTime: TimerModel): number {
    const hourToMinute = examTime.hour * 60;
    const totalMinutes = hourToMinute + examTime.minute;
    const totalSeconds = totalMinutes * 60;
    return examTime.second ? totalSeconds + examTime.second : totalSeconds;
  }

  public convertSecondsToTimer(seconds: number): TimerModel {
    const minute = (seconds / 60) % 60;
    const hour = (seconds / 60 - minute) / 60;
    return { hour, minute };
  }
}
