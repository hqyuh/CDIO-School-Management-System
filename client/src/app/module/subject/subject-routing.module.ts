import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectPageComponent } from './page/subject-page/subject-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SubjectPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
