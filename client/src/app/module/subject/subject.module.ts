import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule} from 'primeng/table'

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectPageComponent } from './page/subject-page/subject-page.component';



@NgModule({
  declarations: [
    SubjectPageComponent
  ],
  imports: [CommonModule, SubjectRoutingModule, TableModule],
})
export class SubjectModule {}
