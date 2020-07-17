import { Directive, HostListener, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import $ from 'jquery';
import 'bootstrap';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirectiveDirective implements OnInit {

  constructor(public el: ElementRef, public renderer: Renderer2) {

  }

  isCurrentTarget(e: any): boolean {
    return $(e.target).is("a");
  }

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: any) {
    if (!this.isCurrentTarget(e)) {
      return;
    }
    const $element: any = $(this.el.nativeElement);
    $element.tooltip({
      sanitize: false, sanitizeFn: content => content, popperConfig: {

      }
    }
      );
    $element.tooltip("show");
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: any) {
    if (!this.isCurrentTarget(e)) {
      return;
    }
    const $element: any = $(this.el.nativeElement);
    $element.tooltip("hide");
  }

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement, "data-toggle", "tooltip");
    this.renderer.setAttribute(this.el.nativeElement, "data-placement", "top");
    this.renderer.setAttribute(this.el.nativeElement, "title", this.tooltip);
    const $element: any = $(this.el.nativeElement);
    $element.tooltip({
      sanitize: false, sanitizeFn: content => content, popperConfig: {
        
      },
      container: 'body',
      trigger: 'manual',
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
    //$element.tooltip("show");
  }


  @Input() tooltip: string;

}
