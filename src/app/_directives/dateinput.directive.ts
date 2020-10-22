import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import * as moment from 'moment';
declare var $: any;
@Directive({
  selector: '[DateMask]',
})
export class DateMaskDirective {
  @Input('matDatepicker') picker: any;
  constructor(private ngControl: NgControl, private el: ElementRef) { }
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
  @HostListener('blur', ['$event'])
  onblur(event) {
    const value = event.target.value || '';
    if (value && value.length > 3) {
      let reg = /^([1-9]|[0-2][0-9]|(3)[0-1])(\/)(([1-9]|(0)[0-9]|(1)[0-2])|((1)[0-2]))(\/)([1-2]\d{3})$/;
      if (value.trim().match(reg)) {
        let date = moment(value.trim(), 'DD/MM/YYYY');
        if (date.isValid())
        {
          this.ngControl.control.setValue(date.toDate());
          return;
        }
      }
    }
    this.ngControl.control.setValue(null);
    event.target.value = value;
  }
  onInputChange(event) {
    const value = event.target.value || '';
    if (event.code == 'Backspace' || event.keyCode == 8 || event.code == 'ArrowRight' || event.keyCode == 39 || event.code == 'ArrowLeft' || event.keyCode == 37)
      return
      let reg = /^([1-9]|[0-2][0-9]|(3)[0-1])(\/)(([1-9]|(0)[0-9]|(1)[0-2])|((1)[0-2]))(\/)([1-2]\d{3})$/;
    if (value) {
      if (value.trim().match(reg))
        return;
    }
    let newVal = value.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length < 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1');
    }
    else if (newVal.length == 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1');
    }
    else if (newVal.length < 4) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
    }
    else if (newVal.length == 4) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
    }
    else {
      newVal = newVal.substring(0, 8);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
    }
    if (!value.trim().match(reg))
    this.ngControl.control.setValue(null);
    event.target.value = newVal;
  }
  ngAfterViewInit(): void {
    this.picker.openedStream.subscribe(() => {
      $('.mat-datepicker-popup').parent().prev().remove();
      $(document.body).on('mousedown.matdatepicker.' + this.picker.id, (e) => {
        const target = $(e.target);
        const datepicker = target.closest('.mat-datepicker-popup');
        const all = $('.mat-datepicker-popup');
        const toggel = target.closest('mat-datepicker-toggle');
        const alltoggel = $(this.el.nativeElement).closest('mat-form-field').find('mat-datepicker-toggle');
        if (datepicker[0] == all[0])
          return
        if (toggel[0] == alltoggel[0]) {
          setTimeout(() => {
            this.picker.opened = false;
          }, 100);
          return
        }
        this.picker.opened = false;
      });
    });
    this.picker.closedStream.subscribe(() => {
      $(document.body).off('mousedown.matdatepicker.' + this.picker.id);
    });
  }
}
