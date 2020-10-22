import { Directive, HostListener, Input, ElementRef } from '@angular/core';
@Directive({
  selector: '[hostKey]',
})
export class hostKeyDirective {
  @Input('keycode') keycode
  @Input('key') key
  @Input('hostkeyFn') hostkeyFn
  constructor(private el: ElementRef) { }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.keyEvent) {
      if (event.keyCode == this.keycode)
        if (this.hostkeyFn)
          this.hostkeyFn();
        else
          this.el.nativeElement.click();
    }
    else if (this.key) {
      if (event.key == this.key)
        if (this.hostkeyFn)
          this.hostkeyFn();
        else
          this.el.nativeElement.click();
    }
  }
}