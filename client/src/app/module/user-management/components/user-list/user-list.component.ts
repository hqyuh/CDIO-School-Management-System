import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import User from 'src/app/module/account/models/account.model';
import { UserService } from 'src/app/shared/service/user.service';
import { SaveSelectedUser } from '../../service/user.action';
import { UserState } from '../../service/user.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [DestroyableService]
})
export class UserListComponent implements OnInit {
  @Input('users') public users: User[];
  public selectedUser: User;

  constructor(private store: Store, private userService: UserService, private toastService: ToastrService, private destroyableService: DestroyableService) { }

  public cols = [
    {
      header: 'Selection',
      field: 'selection'
    }
    ,
    {
      header: 'Tên tài khoản',
      field: 'username',
    },
    {
      header: 'Email',
      field: 'email'
    },
    {
      header: 'Tên',
      field: 'fullName',
    },
    {
      header: 'Mật khẩu',
      field: 'password'
    },
    {
      header: 'Block',
      field: 'block'
    }
  ]

  public ngOnInit(): void {
    
  }

  public onSelectedUser(user: User): void { 
    this.store.dispatch(new SaveSelectedUser(user));
  }
  
  public onBlockUser(isBLock: boolean): void {
    const userId = this.store.selectSnapshot(UserState.selectedUser).id;
    this.userService.lockUser(userId, isBLock).pipe(takeUntil(this.destroyableService.destroy$)).subscribe({
      next: ()=> this.toastService.success('Đã khóa tài khoản thành công!'),
      error: ()=> this.toastService.error('Khóa tài khoản thất bại')
    })
  }
}
