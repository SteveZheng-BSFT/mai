import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[myBack]'
})
export class BackDirective {

  constructor(public el: ElementRef, public renderer: Renderer, public location: Location) {
    // renderer provides an abstraction over the native elem (not only for browser)
    renderer.setElementClass(el.nativeElement, 'btn', true);
    renderer.setElementClass(el.nativeElement, 'btn-secondary', true);
    renderer.setElementAttribute(el.nativeElement, 'type', 'button');
  }

  @HostListener('click') onClick() {
    this.location.back();
  }
}
