import { Directive, HostListener ,Input} from '@angular/core';
import { NgControl,FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;
@Directive({
  selector: '[NumberMask]',
})
export class NumberMaskDirective {
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
  onInputChange(event) {
   
  }
  
}
