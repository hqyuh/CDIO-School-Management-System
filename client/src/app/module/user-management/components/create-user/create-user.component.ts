import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [DestroyableService]
})
export class CreateUserComponent implements OnInit {
  public createUserForm: FormGroup;
  constructor(private fb: FormBuilder, private ngbModal: NgbModal, private userService: UserService, private toastService: ToastrService, private destroyableService: DestroyableService) { }

  public ngOnInit(): void {
    this.createUserForm = this.fb.group({
      username: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,18}$'),]],
      role: ['ROLE_STUDENT']
    });
  }

  public createUser(): void {
    const newUser = this.createUserForm.value;
    if(this.createUserForm.valid) {
        this.userService.createUser(newUser).pipe(takeUntil(this.destroyableService.destroy$)).subscribe({
          next: ()=> this.toastService.success('User have been created in the background!'),
          error: ()=> this.toastService.error('Create user fail!')
        })
    }
  }

  public openCreateUserModal(content: any): void {
    this.ngbModal.open(content);
  }

  public get Email(): FormControl {
    return this.createUserForm.get('email') as FormControl;
  }
  public get Username(): FormControl {
    return this.createUserForm.get('username') as FormControl;
  }

  public get Password(): FormControl {
    return this.createUserForm.get('password') as FormControl;
  }

}
