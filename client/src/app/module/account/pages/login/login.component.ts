import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: any;
  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
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

  public login(): void{
    console.log(this.loginForm.valid);
  }

  public get Email(): FormControl{
    return this.loginForm.get('email');
  }

  public get Password(): FormControl{
    return this.loginForm.get('password');
  }
}
