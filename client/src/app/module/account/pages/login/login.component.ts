import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  constructor(
    private fb: FormBuilder,
    private AccountService: AccountService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(16)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(18),
          Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,18}$'),
        ],
      ],
    });
  }

  public login(): void {
    this.AccountService.login(this.loginForm.value).subscribe({
      next: () => {
        void this.router.navigate(['/home']);
        this.toastr.success('Welcome to Quizzes Online');
      },
      error: (error) => this.toastr.error(error.message),
    });
  }

  public get UserName(): FormControl {
    return this.loginForm.get('username');
  }

  public get Password(): FormControl {
    return this.loginForm.get('password');
  }
}
