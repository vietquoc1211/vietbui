import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { FormControl } from '@angular/forms';
import {  debounceTime, tap, map, filter, takeUntil, delay } from 'rxjs/operators';
import {  ReplaySubject, Subject } from 'rxjs';
import { ValidatorConstants } from '../../_common/ValidatorConstants';
import { MatAutocomplete } from '@angular/material';

@Component({
  selector: 'autocomplete-server-side',
  template: `
          <mat-form-field>
            <input [formControl]="Control" [ngClass]="inputClass" [placeholder]="Title" matInput [matAutocomplete]="auto" #el>
              <mat-autocomplete [stopScroll]="stopscroll" #auto="matAutocomplete" class="autocomplete" [panelWidth]="panelWidth" (optionsScroll)="onScroll($event)">
                    <mat-option  [ngClass]="itemClass" class="item" *ngFor="let item of filtered | async;let i = index" 
                    [value]="item[ViewOption]" [disabled]="item.disabled" (onSelectionChange)="selectionChange($event,item)">
                      <ng-container *ngTemplateOutlet="itemTemplate; context: {item:item}">
                      </ng-container>
                    </mat-option>
                <mat-option *ngIf="searching" class='loadding'><mat-progress-bar mode="indeterminate"></mat-progress-bar></mat-option>
              </mat-autocomplete>
              <mat-error *ngIf="!!Control.errors?.required">{{vali_const.ms_required}}</mat-error>
          </mat-form-field>`
})
export class AutocompleteServerSideComponent implements OnInit, OnDestroy {
  /**
* @ContentChild template option select
* @Title tiêu đề của control
* @Api api get dataSource cho select
* @DefaultValue gán giá trị cho select
* @SelectChange sự kiện selected
* @Control là control của form 
* @fnMap Map dữ liệu cho datasource : datasource = (data):array => {data.map(o =>{return {id: o.LoaiThuocID,text:o.TenLoai}})}
**/
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<any>;
  @ViewChild('el') el: ElementRef;
  @ViewChild('auto') autoComplete: MatAutocomplete;
  @Input() Title: string = '';
  @Input() AlwaysEmit: boolean = false;
  @Input() ViewOption: string = '';
  @Input() Api: string = '';
  @Input() Control = new FormControl();
  @Input() inputClass: string = '';
  @Input() itemClass: string = '';
  @Input() panelWidth: string = '';
  @Output() SelectChange = new EventEmitter<FormControl>();
  private text: string = '';
  private emit: boolean = false;
  public searching: boolean = false;
  private dataSource: any[] = [];
  public FilterCtrl: FormControl = new FormControl();
  public filtered: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);
  protected _onDestroy = new Subject<void>();
  public vali_const = ValidatorConstants;
  private pager: any = {};
  public stopscroll = false;
  private firstload=true;
  constructor(private _data: DataService) {
    this.firstload=true
  }
  ngOnInit() {
    this.filtered.next([]);
    this.Control.valueChanges
      .pipe(
        filter(search => !!search),
        tap(() => this.searching = true),
        takeUntil(this._onDestroy),
        debounceTime(200),
        map(search => {
          if (this.AlwaysEmit && this.text != search && !this.emit)
            this.SelectChange.emit(null);
          this.text = search;
          this.emit = false;
          return this._data.get(this.Api + search);
        }),
        delay(200)
      )
      .subscribe(filteredBanks => {
        filteredBanks.subscribe((res: any) => {
          this.searching = false;
          this.dataSource = res;
          this.setPage(1);
          if(this.firstload)
          {
            this.autoComplete.opened.emit();
            this.firstload=false;
          }
        }, (error) => {
          this.searching = false;
        });
      },
        error => {
          this.searching = false;
        });
  }
  selectionChange(event: any, value: any) {
    this.text = value[this.ViewOption];
    this.emit = true;
    if (event.isUserInput)
      this.SelectChange.emit(value);
  }
  focus() {
    this.el.nativeElement.focus();
  }
  setPage(page: number) {
    this.pager = this._data.getPager(this.dataSource.length, page, 20);
    if (this.pager.totalPages == page)
    this.stopscroll = true;
    this.filtered.next(this.dataSource.slice(0, this.pager.endIndex + 1));
  }
  onScroll(event) {
    this.setPage(this.pager.currentPage + 1)
    if (event.callback)
      event.callback();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
