import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DirectiveModule } from 'src/app/core/directive/directive.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    DirectiveModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AccountModule { }
