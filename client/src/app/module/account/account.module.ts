import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { DirectiveModule } from 'src/app/core/directive/directive.module';
import { RegisterComponent } from './pages/register/register.component';
import { FormFooterComponent } from './components/form-footer/form-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { UiSwitchModule } from 'ngx-ui-switch';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, FormFooterComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    DirectiveModule,
    ReactiveFormsModule,
    PasswordModule,
    UiSwitchModule
  ],
  exports: [LoginComponent, RegisterComponent],
})
export class AccountModule {}
