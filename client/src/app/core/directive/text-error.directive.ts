import {
  Directive,
  ElementRef,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[text-error]',
})
export class TextErrorDirective implements OnInit {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.color = 'red';
  }

  public ngOnInit() {}
}
