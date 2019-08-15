import { Directive, HostListener, ElementRef, Renderer2, Input  } from '@angular/core';

@Directive({
  selector: '[appTextSizeTransformer]'
})
export class TextSizeTransformerDirective {
  @Input() size: string;

  constructor(private elementRef: ElementRef, private render: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.render.setStyle(this.elementRef.nativeElement, 'fontSize', this.size || '20px');
  }

}
