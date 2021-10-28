import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { UserService } from 'src/app/shared/service/user.service';
import { UserState } from '../../service/user.state';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
  providers: [ConfirmationService, DestroyableService]
})
export class DeleteUserComponent  {

  constructor(private toastService: ToastrService, private destroyableService: DestroyableService, private confirmService: ConfirmationService, private store: Store, private userService: UserService) { }

  public confirmDeleteUser(): void {
    this.confirmService.confirm({
      message: 'Bạn có thật sự muốn xóa người dùng này?',
      accept: ()=>{
        const selectedUserOnStore = this.store.selectSnapshot(UserState.selectedUser);
        if(selectedUserOnStore !== undefined){
          this.userService.deleteUser(selectedUserOnStore.id).pipe(takeUntil(this.destroyableService.destroy$)).subscribe({
            next: ()=> this.toastService.success('Xóa thành công!'),
            error: ()=> this.toastService.error('Đã có lỗi xảy ra, vui lòng thử lại!')
          })
        } else {
          this.toastService.error('Vui lòng chọn một người dùng để xóa');
        }
      }
    })
  }
}
