import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextErrorDirective} from './text-error.directive';
import { CanDisplayCrudDirective } from './can-display-crud.directive'



@NgModule({
  declarations: [
    TextErrorDirective,
    CanDisplayCrudDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextErrorDirective,
    CanDisplayCrudDirective
  ]
})
export class DirectiveModule { }
