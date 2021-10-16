import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerCountdownComponent } from './timer-countdown.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimerCountdownComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TimerCountdownComponent
  ]
})
export class TimerCountdownModule { }
