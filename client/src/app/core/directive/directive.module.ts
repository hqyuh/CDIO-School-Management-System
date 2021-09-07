import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputIconDirective } from './input-icon.directive';



@NgModule({
  declarations: [
    InputIconDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputIconDirective
  ]
})
export class DirectiveModule { }
