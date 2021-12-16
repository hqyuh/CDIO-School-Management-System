import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import User from 'src/app/module/account/models/account.model';
import { SaveSelectedUser } from '../../service/user.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input('users') public users: User[];
  public selectedUser: User;

  constructor(private store: Store) { }

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
  
  public onBlockUser(id: number): void {
    
  }
}
