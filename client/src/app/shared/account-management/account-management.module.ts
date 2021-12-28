import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManagementRoutingModule } from './account-management-routing.module';
import { AccountManagementComponent } from './account-management.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountManagementComponent
  ],
  imports: [
    CommonModule,
    AccountManagementRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AccountManagementComponent
  ]
})
export class AccountManagementModule { }
