import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/module/account/service/account.service';
import { SystemRole } from '../enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router, private toastService: ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userRole = SystemRole[this.accountService.currentUserValue.role];
    if( userRole === 'Teacher' || userRole === 'Administrator' ) {
      return true;
    } else {
      void this.router.navigate(['/home/exam-code']);
      this.toastService.error('Bạn không có quyền truy cập trang này!');
      return false;
    }
  }
}
