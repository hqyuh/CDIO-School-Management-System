import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SubjectModel } from 'src/app/module/subject/model/subject.model';
import { SubjectState } from 'src/app/module/subject/service/subject.state';
import { QuizzModel } from '../../model/quizz.model';
import { SaveSelectedQuizz } from '../../service/quizz.action';
import { QuizzService } from '../../service/quizz.service';

@Component({
  selector: 'app-quizz-list',
  templateUrl: './quizz-list.component.html',
  styleUrls: ['./quizz-list.component.scss'],
})
export class QuizzListComponent implements OnInit {
  @Select(SubjectState.getSelectedSubject)
  public selectedSublect$: Observable<SubjectModel>;
  public selectedSubject: SubjectModel = {} as SubjectModel;
  public selectedQuizz: QuizzModel;
  public quizzes$ : Observable<QuizzModel[]>;
  public cols = [
    {
      header: 'Selection',
      field: 'selection',
      width: 3,
    },
    {
      header: 'ID',
      field: 'id',
      width: 18,
    },
    {
      header: 'Bài thi',
      field: 'name'
    },
    {
      header: 'Mô tả',
      field: 'description'
    },
    {
      header: 'Ngày tạo',
      field: 'dateCreated',
    },
    {
      header: 'Mã code',
      field: 'activationCode'
    },
    {
      header: 'Tạo câu hỏi',
      field: 'edit',
    }
  ]

  constructor(private router: Router , private toastService: ToastrService, private quizzService: QuizzService, private store: Store) {}

  public ngOnInit(): void {
    this.selectedSublect$.subscribe((subject) => {
      if(!subject){
        void this.router.navigate(['/home/subject']);
        this.toastService.warning('Vui lòng chọn một môn học để xem bài thi!');
      } else {
        this.selectedSubject = subject;
        this.quizzes$ = this.quizzService.getQuizz(subject.id);
      }
    });
  }

  public saveSelectedQuizz(quizz: QuizzModel): void{
    this.store.dispatch(new SaveSelectedQuizz(quizz)).subscribe(()=>{
      this.router.navigate(['/home/quizz/exam']);
    });
  }

  public onSelectedQuizz(quizz: QuizzModel): void{
    this.store.dispatch(new SaveSelectedQuizz(quizz));
  }
}
