import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../service/account.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: any;
  public userRole = 'ROLE_STUDENT';
  constructor(
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  public ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(18),
            Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,18}$'),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.passwordsMatch(),
      }
    );
  }

  public register(): void {
    const userValue = { ...this.registerForm.value, role: this.userRole };
    this.accountService.register(userValue).subscribe({
      next: () => {
        this.toastrService.success('Register successfully! ' +
          '\n Please check your email to activate your account. Thanks!');
        this.router.navigate(['/account/login'])
      },
      error: () => {
        this.toastrService.success('Register fail!');
      }
    });
  }

  public passwordsMatch() {
    return (form: FormGroup): { [s: string]: boolean } | null => {
      const password = form.controls.password?.value;
      const confirmPassword = form.controls.confirmPassword.value;
      if (password !== confirmPassword) {
        return { misMatch: true };
      } else {
        return null;
      }
    };
  }

  public onChangeUserRole(role: boolean): void {
    this.userRole = role === true ? 'ROLE_STUDENT' : 'ROLE_TEACHER';
  }

  public get Email(): FormControl {
    return this.registerForm.get('email');
  }
  public get Username(): FormControl {
    return this.registerForm.get('username');
  }

  public get Password(): FormControl {
    return this.registerForm.get('password');
  }

  public get ConfirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword');
  }
}
