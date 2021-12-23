import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  public forgetPasswordForm : FormGroup;
  constructor(private fb: FormBuilder, private accountService: AccountService, private toastService: ToastrService) { }

  public ngOnInit(): void {
    this.forgetPasswordForm = this.fb.group({
      newPassword: ['',[Validators.required]]
    })
  }

  public forgetPassword(): void {
    const forgetPasswordValue = this.forgetPasswordForm.value;
    if(this.forgetPasswordForm.valid){
      this.accountService.forgetPassword(forgetPasswordValue).subscribe({
        next: ()=> this.toastService.success('Your password sent to your email!'),
        error: ()=> this.toastService.error('Some thing went wrong!')
      })
    }
  }
}
