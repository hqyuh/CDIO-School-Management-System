import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public createUserForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.createUserForm = this.fb.group({
      username: ['',[Validators.required]],
      email: ['',[Validators.email]],
    })
  }

}
