import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { QuizzModel } from '../../model/quizz.model';
import { QuizzService } from '../../service/quizz.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-editable-question-page',
  templateUrl: './editable-question-page.component.html',
  styleUrls: ['./editable-question-page.component.scss'],
  providers: [DestroyableService]
})
export class EditableQuestionPageComponent implements OnInit {
  public exam: QuizzModel;
  @Select(QuizzState.selectedQuizz)
  public selectedQuizz$: Observable<QuizzModel>;

  constructor(
    private destroyableService: DestroyableService,
    private quizzService: QuizzService,
    private toastService: ToastrService,
    private router: Router,
    private store: Store
  ) {}

  public ngOnInit(): void {
    this.selectedQuizz$.pipe(takeUntil(this.destroyableService.destroy$)).subscribe(exam=>{
      this.exam = exam;
    });
  }

  public onChangeQuizzPrivateMode(isPrivate: boolean): void {
      const selectedQuizzOnStore = this.store.selectSnapshot(QuizzState.selectedQuizz);
      this.quizzService.updateQuizz({id: selectedQuizzOnStore.id, isPrivate}).pipe(takeUntil(this.destroyableService.destroy$)).subscribe({
        next: ()=> this.toastService.success('Thay đổi chế độ thành công'),
        error: ()=> this.toastService.error('Thay đổi chế độ thất bại')
      })
  }
}
