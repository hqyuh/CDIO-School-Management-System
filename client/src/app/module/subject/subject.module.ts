import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule} from 'primeng/table'

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectPageComponent } from './page/subject-page/subject-page.component';
import { NgxsModule } from '@ngxs/store';
import { SubjectState } from './service/subject.state';



@NgModule({
  declarations: [
    SubjectPageComponent
  ],
  imports: [CommonModule, SubjectRoutingModule, TableModule,
  NgxsModule.forFeature([SubjectState])],
})
export class SubjectModule {}
