import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { SubjectModel } from '../../model/subject.model';
import { SaveSelectedSubject } from '../../service/subject.action';
import { SubjectService } from '../../service/subject.service';


@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss'],
  providers: [DestroyableService]
})
export class SubjectPageComponent implements OnInit {
  public subjects: Observable<SubjectModel[]>;
  public selectedSubject: SubjectModel;

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
      header: 'Tên môn',
      field: 'name',
    },
    {
      header: 'Giáo viên',
      field: 'teacher',
      width: 50,
    },
    {
      header: 'Ngày tạo',
      field: 'dateCreated',
    },
    {
      header: 'Ngôn ngữ',
      field: 'nationality',
    },
    {
      header: 'Bài thi',
      field: 'quizz',
    },
  ];
  constructor(
    private subjectService: SubjectService,
    private toastSerivce: ToastrService,
    private store: Store,
    private router: Router,
    private destroyableService: DestroyableService
  ) {}

  public ngOnInit(): void {
    this.subjects = this.subjectService.getSubjectList().pipe(takeUntil(this.destroyableService.destroy$));
  }

  public onSelectionSubject(subject: SubjectModel): void {
    this.selectedSubject = subject;
    this.store.dispatch(new SaveSelectedSubject(subject));
  }

  public watchQuizzes(): void {
    if (!this.selectedSubject) {
      this.toastSerivce.error('Vui lòng chọn môn học để xem bài thi!');
    } else {
      void this.router.navigate(['/home/quizz']);
      this.toastSerivce.success(
        `Danh sách bài thi môn ${this.selectedSubject.name}`
      );
    }
  }
}
