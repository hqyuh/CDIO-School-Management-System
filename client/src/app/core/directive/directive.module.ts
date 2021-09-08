import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextErrorDirective} from './text-error.directive'



@NgModule({
  declarations: [
    TextErrorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextErrorDirective
  ]
})
export class DirectiveModule { }
