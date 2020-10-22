import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
  selector: '[TimeMask]',
})
export class TimeMaskDirective {

  constructor(public ngControl: NgControl) { }
  @HostListener('keyup', ['$event'])
  onKeydownHandler(event) {
    this.onInputChange(event);
  }
  @HostListener('keypress', ['$event'])
  onkeypress(event) {
    if ((event.which < 48 || event.which > 57
      || (event.target.value.length >= 10 && ($(event.target)[0].selectionEnd - $(event.target)[0].selectionStart) == 0))) {
      event.preventDefault();
      return;
    }
  }
  @HostListener("blur", ['$event'])
  onBlur(event) {
    const value = event.target.value || '';
    if (value && value.length > 3) {
      let reg = /^([0-9]|[0-1][0-9]|(2)[0-4])(:)([0-9]|[0-5][0-9]|(00))$/;
      if (value.trim().match(reg)) {
        const arr = value.split(':');
        this.ngControl.control.setValue((arr[0].length == 1 ? '0' : '') + arr[0] + ':' + (arr[1].length == 1 ? '0' : '') + arr[1]);
        return;
      }
    }
    this.ngControl.control.setValue(null);
    event.target.value = value;
  }
  onInputChange(event) {
    const value = event.target.value || '';
    if (event.code == 'Backspace' || event.keyCode == 8 || event.code == 'ArrowRight' || event.keyCode == 39 || event.code == 'ArrowLeft' || event.keyCode == 37)
      return
    let reg = /^([0-9]|[0-1][0-9]|(2)[0-4])(:)([0-9]|[0-5][0-9]|(00))$/;
    if (value) {
      if (value.trim().match(reg))
        return;
    }
    let newVal = value.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1');
    }
    else if (newVal.length == 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1:');
    }
    else {
      newVal = newVal.substring(0, 4);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1:$2');
    }
    if (!value.trim().match(reg))
      this.ngControl.control.setValue(null);
    event.target.value = newVal;
  }
}