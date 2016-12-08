import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appGoBack]'
})
export class GoBackDirective {
  @Input() appGoBack = '';
  constructor(public el: ElementRef, public renderer: Renderer, public location: Location) {
    // renderer provides an abstraction over the native elem (not only for browser)
    renderer.setElementAttribute(el.nativeElement, 'type', 'button');
    renderer.setElementClass(el.nativeElement, 'btn', true);
    renderer.setElementClass(el.nativeElement, 'btn-link', true);
    if (this.appGoBack = 'white') {
      renderer.setElementStyle(el.nativeElement, 'color', 'white');
    }
  }

  @HostListener('click') onClick() {
    this.location.back();
  }
}
