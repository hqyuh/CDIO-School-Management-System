import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { SystemRole } from 'src/app/core/enum/role.enum';
import { environment } from 'src/environments/environment';
import { AccountService } from '../../account/service/account.service';
import { QuizzState } from '../../quizz/service/quizz.state';
import { StudentMarkModel } from '../model/student-mark.model';

@Injectable({
  providedIn: 'root',
})
export class StudentMarkService {
  constructor(
    private accountService: AccountService,
    private store: Store,
    private router: Router,
    private toastService: ToastrService,
    private http: HttpClient
  ) {}

  public getMarksList(): Observable<StudentMarkModel[]> {
    const selectedQuizzOnStore = this.store.selectSnapshot(
      QuizzState.selectedQuizz
    );
    const currentUser = this.accountService.currentUserValue;
    const userRole = SystemRole[currentUser.role];

    if (userRole !== 'Student' && selectedQuizzOnStore === undefined) {
      this.toastService.error('Hãy chọn một bài thi để xem điểm!');
      void this.router.navigate(['/home/subject']);
    }

    const url =
      userRole === 'Student'
        ? `${environment.apiHost}/studentMark/user/${currentUser.username}`
        : `${environment.apiHost}/studentMark/quizz/${selectedQuizzOnStore?.id}`;
        
    return this.http.get<StudentMarkModel[]>(url);
  }
}
