import { Directive, EventEmitter, Output, Input, OnDestroy } from '@angular/core';
import { MatAutocomplete } from '@angular/material';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';
export interface IAutoCompleteScrollEvent {
  autoComplete: MatAutocomplete;
  scrollEvent: Event;
  callback: Function;
}
@Directive({
  selector: 'mat-autocomplete[optionsScroll]'
})
export class OptionsScrollDirective implements OnDestroy {
  @Output('optionsScroll') scroll = new EventEmitter<IAutoCompleteScrollEvent>();
  @Input('stopScroll') stop = false;
  _onDestroy = new Subject();
  constructor(public autoComplete: MatAutocomplete) {
    this.autoComplete.opened.pipe(
      tap(() => {
        setTimeout(() => {
          this.removeScrollEventListener();
          if(this.autoComplete.panel&&this.autoComplete.panel.nativeElement)
          this.autoComplete.panel.nativeElement
            .addEventListener('scroll', this.onScroll.bind(this))
        });
      }),
      takeUntil(this._onDestroy)).subscribe();
    this.autoComplete.closed.pipe(
      tap(() => this.removeScrollEventListener()),
      takeUntil(this._onDestroy)).subscribe();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
    this.removeScrollEventListener();
  }
  private removeScrollEventListener() {
    if (this.autoComplete.panel && this.autoComplete.panel.nativeElement)
      this.autoComplete.panel.nativeElement
        .removeEventListener('scroll', this.onScroll);
  }
  onScroll(event: any) {
    if (this.stop)
      return;
    if ((event.target.scrollTop + event.target.clientHeight) == event.target.scrollHeight) {
      let lastoption = this.autoComplete.options.find(s => s.active);
      this.scroll.next({
        autoComplete: this.autoComplete, scrollEvent: event, callback: () => {
          setTimeout(() => {
            this.autoComplete._keyManager.setActiveItem(lastoption)
          }, 50);
        }
      });
    }
  }
}