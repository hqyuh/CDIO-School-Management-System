import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-fulfilled-page',
  templateUrl: './exam-fulfilled-page.component.html',
  styleUrls: ['./exam-fulfilled-page.component.scss']
})
export class ExamFulfilledPageComponent implements OnInit {
  public mark: number;
  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.mark = this.router.getCurrentNavigation().extras.state.mark;
  }

}
