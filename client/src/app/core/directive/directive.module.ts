import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextErrorDirective} from './text-error.directive';
import { CanDisplayCrudDirective } from './can-display-crud.directive'
import { StudentCanUseDirective } from './studentCanUse.directive';



@NgModule({
  declarations: [
    TextErrorDirective,
    CanDisplayCrudDirective,
    StudentCanUseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextErrorDirective,
    CanDisplayCrudDirective,
    StudentCanUseDirective
  ]
})
export class DirectiveModule { }
