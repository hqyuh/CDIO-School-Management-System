import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import User from 'src/app/module/account/models/account.model';
import { UserService } from 'src/app/shared/service/user.service';
import { UserState } from 'src/app/module/user-management/service/user.state';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss'],
  providers: [DestroyableService],
})
export class UserListPageComponent implements OnInit {
  @Select(UserState.getStudents)
  public students$: Observable<User[]>;
  @Select(UserState.getTeachers)
  public teachers$: Observable<User[]>;
  public active = 1;

  constructor(
    private userService: UserService,
    private destroyableService: DestroyableService
  ) {}

  public ngOnInit(): void {
    this.userService
      .getAllUser()
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe();
  }
}
