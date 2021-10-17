import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { QuizzState } from 'src/app/module/quizz/service/quizz.state';

@Injectable({
  providedIn: 'root'
})
export class ExamGuard implements CanActivate {
  constructor(private store: Store, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const selectedQuizzOnStore = this.store.selectSnapshot(QuizzState.selectedQuizz);
    if(selectedQuizzOnStore === undefined){
      void this.router.navigate(['/home/quizz']);
      return false;
    }
    return true;
  }
  
}
