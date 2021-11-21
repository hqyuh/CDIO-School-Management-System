import { Directive, ElementRef } from '@angular/core';
import { AccountService } from 'src/app/module/account/service/account.service';
import { SystemRole } from '../enum/role.enum';

@Directive({
  selector: '[canDisplayCrud]',
})
export class CanDisplayCrudDirective {
  constructor(
    private element: ElementRef,
    private accountService: AccountService
  ) {
    const userRole = this.accountService.currentUserValue?.role;
    if (SystemRole[userRole] === 'Student') {
      this.element.nativeElement.style.display = 'none';
    }
  }
}
