import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { TableModule } from 'primeng/table';
import { NgbModalModule, NgbNavModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './service/user.state';
import { UserListComponent } from './components/user-list/user-list.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserListPageComponent,
    UserListComponent,
    DeleteUserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    TableModule,
    NgbTooltipModule,
    NgxsModule.forFeature([UserState]),
    NgbNavModule,
    ConfirmDialogModule,
    UiSwitchModule,
    ReactiveFormsModule,
    NgbModalModule
  ]
})
export class UserManagementModule { }
