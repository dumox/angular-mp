import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighliter]'
})
export class HighliterDirective {

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('mouseenter')
  enter() {
    this.elementRef.nativeElement.classList.add('bg-warning');
  }

  @HostListener('mouseleave')
  leave() {
    this.elementRef.nativeElement.classList.remove('bg-warning');
  }
}
