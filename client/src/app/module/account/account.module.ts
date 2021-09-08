import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DirectiveModule } from 'src/app/core/directive/directive.module';
import { RegisterComponent } from './pages/register/register.component';
import { FormFooterComponent } from './components/form-footer/form-footer.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormFooterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    DirectiveModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
