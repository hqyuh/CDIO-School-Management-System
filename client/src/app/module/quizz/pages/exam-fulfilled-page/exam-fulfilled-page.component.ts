import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-fulfilled-page',
  templateUrl: './exam-fulfilled-page.component.html',
  styleUrls: ['./exam-fulfilled-page.component.scss']
})
export class ExamFulfilledPageComponent {
  public mark: number;
  constructor(private router: Router) {
    this.mark = this.router.getCurrentNavigation().extras.state?.mark;
   }
}
