import { Directive, Input, ElementRef } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[SCroll]',
})
export class SCrollDirective {
  constructor(private el: ElementRef) { 
  }
  ngAfterViewInit(): void {
    let h=$(this.el.nativeElement).data('height');
    if(!h||h==null)
    h=$(this.el.nativeElement).parent().height;
    $(this.el.nativeElement).mCustomScrollbar({ theme: 'minimal-dark', alwaysShowScrollbar: true, setHeight: h });
  }
}