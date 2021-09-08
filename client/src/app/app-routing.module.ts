import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: ()=> import('./module/account/account.module').then(m=>m.AccountModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'account'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
