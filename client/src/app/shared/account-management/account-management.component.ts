import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { AccountService } from 'src/app/module/account/service/account.service';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss'],
  providers: [DestroyableService],
})
export class AccountManagementComponent implements OnInit {
  public accountInfoForm: FormGroup;
  public isEditing: boolean = true;
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private destroyableService: DestroyableService,
    private toastService: ToastrService
  ) {}

  public ngOnInit(): void {
    this.accountInfoForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      fullname: ['', Validators.required],
      position: ['', Validators.required],
      password: ['',Validators.required]
    });
    this.accountService
      .getUserInfo()
      .pipe(takeUntil(this.destroyableService.destroy$))
      .subscribe({
        next: ({ username, email, fullname, position, password }) => {
          this.accountInfoForm.setValue({
            username,
            email,
            fullname,
            position,
            password
          });
        },
        error: () => {
          this.toastService.error('Không thể lấy thông tin ngay lúc này!');
        },
      });
  }

  public onChangeUserInfo(): void {
    if (this.accountInfoForm.valid) {
      this.accountService.updateInfo(this.accountInfoForm.value).subscribe({
        next: ({ username, email, fullname, position, password }) => {
          this.accountInfoForm.setValue({
            username,
            email,
            fullname,
            position,
            password
          });
          this.toastService.success('Đã cập nhật thông tin thành công!');
        },
        error: () => {
          this.toastService.error('Đã có lỗi xảy ra!');
        },
      });
    }
  }

  public get Username(): FormControl {
    return this.accountInfoForm.get('username') as FormControl;
  }

  public get Fullname(): FormControl {
    return this.accountInfoForm.get('fullname') as FormControl;
  }

  public get Position(): FormControl {
    return this.accountInfoForm.get('position') as FormControl;
  }

  public get Email(): FormControl {
    return this.accountInfoForm.get('email') as FormControl;
  }

}
