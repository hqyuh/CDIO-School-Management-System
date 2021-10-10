import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/module/account/service/account.service';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser = this.accountService.currentUserValue;
    if (currentUser) {
      return true;
    }
    this.router.navigate(['account/login']);
    return false;
  }
}
