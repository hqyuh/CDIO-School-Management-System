import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path:'subject',
                loadChildren: ()=>import('../../module/subject/subject.module').then(m=>m.SubjectModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'subject'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
