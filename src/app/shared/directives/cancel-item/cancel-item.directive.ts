import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCancelItem]'
})
export class CancelItemDirective {

  constructor(public el: ElementRef, public renderer: Renderer, public router: Router) {
    // renderer provides an abstraction over the native elem (not only for browser)
    renderer.setElementAttribute(el.nativeElement, 'type', 'button');
    renderer.setElementClass(el.nativeElement, 'btn', true);
    renderer.setElementClass(el.nativeElement, 'btn-link', true);
    el.nativeElement.appendChild(document.createTextNode('Cancel'));
  }

  @HostListener('click') onClick() {
    this.router.navigate(['']);
  }

}
