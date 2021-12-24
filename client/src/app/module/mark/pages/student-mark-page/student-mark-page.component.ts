import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/module/account/service/account.service';
import { QuizzModel } from 'src/app/module/quizz/model/quizz.model';
import { QuizzState } from 'src/app/module/quizz/service/quizz.state';
import { StudentMarkModel } from '../../model/student-mark.model';
import { StudentMarkService } from '../../service/student-mark.service';

@Component({
  selector: 'app-student-mark-page',
  templateUrl: './student-mark-page.component.html',
  styleUrls: ['./student-mark-page.component.scss'],
})
export class StudentMarkPageComponent implements OnInit {
  public studentMarks$: Observable<StudentMarkModel[]>;
  public quizz: QuizzModel;
  constructor(private studentMarkService: StudentMarkService, private store: Store, public accountService: AccountService) { }
  public cols = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: 'Mark',
      field: 'mark',
    },
    {
      header: 'Student',
      field: 'username',
    },
    {
      header: 'Quizz',
      field: 'testQuizzId'
    }
  ]
  public ngOnInit(): void {
    this.studentMarks$ = this.studentMarkService.getMarksList();
    this.quizz = this.store.selectSnapshot(QuizzState.selectedQuizz);
  }

}
