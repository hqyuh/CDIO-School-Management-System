import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: any;
  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
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
      confirmPassword: [
        '',
        [
          Validators.required,
        ],
      ],
    },{
      validator: this.passwordsMatch()
    });
  }

  public register(): void{
    console.log(this.registerForm)
  }

  public passwordsMatch() {
    return (form: FormGroup): { [s: string]: boolean } | null => {
      const password = form.controls.password?.value;
      const confirmPassword = form.controls.confirmPassword.value;
      if (password !== confirmPassword) {
        return { 'misMatch': true };
      } else {
        return null;
      }
    };
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
