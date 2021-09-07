import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputIcon]'
})
export class InputIconDirective implements OnInit{

  @Input('appInputIcon') quizzesInputIcon = '';

  constructor(private element: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
   }

   public ngOnInit(){
     const child = this.document.createElement('div');
     child.className = 'text-danger';
     child.textContent = 'text';
     this.renderer.appendChild(this.element.nativeElement, child);
   }
}
