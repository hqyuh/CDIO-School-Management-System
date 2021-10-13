import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuizzState } from 'src/app/module/quizz/service/quizz.state';

@Injectable({
  providedIn: 'root'
})
export class ExamGuard implements CanActivate {
  constructor(private store: Store){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canExamActivate = this.store.selectSnapshot(QuizzState.selectedQuizz);
    return canExamActivate ? true : false;
  }
  
}
