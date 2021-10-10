import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from './core/guard/app.guard';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () =>
      import('./module/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'home',
    canActivate: [AppGuard],
    loadChildren: () =>
      import('./shared/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
