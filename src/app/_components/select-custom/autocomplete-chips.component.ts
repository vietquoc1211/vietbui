import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { FormControl } from '@angular/forms';
import {  startWith, map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { isString } from 'util';
@Component({
  selector: 'autocomplete-chips',
  template: `
          <mat-form-field>
            <mat-chip-list #chipList aria-label="item selection">
              <mat-chip *ngFor="let item of values"
                [selectable]="true"
                (removed)="remove(item)">
                {{item[ViewOption]}}
                <mat-icon matChipRemove >cancel</mat-icon>
              </mat-chip>
              <input [placeholder]="Title" [formControl]="Control" [matAutocomplete]="auto" #el [matChipInputFor]="chipList">
            </mat-chip-list>
              <mat-autocomplete [stopScroll]="stopscroll"  (optionsScroll)="onScroll($event)" #auto="matAutocomplete" class="autocomplete" [panelWidth]="panelWidth" (optionSelected)="selected($event)">
                    <mat-option class="item" [ngClass]="itemClass" *ngFor="let item of showdata;let i = index" 
                    [value]="item" [disabled]="item.disabled">
                      <ng-container *ngTemplateOutlet="itemTemplate; context: {item:item}">
                      </ng-container>
                    </mat-option>
                <mat-option *ngIf="searching" class='loadding'><mat-progress-bar mode="indeterminate"></mat-progress-bar></mat-option>
              </mat-autocomplete>
              <button *ngIf="Button" type="button" (click)="butonclick($event)" mat-icon-button matSuffix><mat-icon>list</mat-icon></button>
          </mat-form-field>`
})
export class AutocompleteChipsComponent implements OnInit, OnDestroy {
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
  @Input() Button: boolean = false;
  @Input() AlwaysEmit: boolean = false;
  @Input() ViewOption: string = '';
  @Input() KeyOption: string = '';
  @Input() Api: string = '';
  @Input() Data: any[] = null;
  @Input() Control = new FormControl();
  @Input() panelWidth: string = '';
  @Input() itemClass: string = '';
  @Output() SelectChange = new EventEmitter<any>();
  @Output() buttomChange = new EventEmitter<any>();
  @Input() fnFilter: any = null;
  private text: string = '';
  private emit: boolean = false;
  public searching: boolean = false;
  private dataSource: any[] = [];
  public FilterCtrl: FormControl = new FormControl();
  public filtered: Observable<string[]>;
  protected _onDestroy = new Subject<void>();
  values: any[] = [];
  private pager: any = {};
  public stopscroll = false;
  private filterdata = [];
  public showdata = [];
  private firstload=true;
  constructor(private _data: DataService) {
    this.firstload=true
  }
  ngOnInit() {
    if (this.Data == null)
      this._data.get(this.Api)
        .subscribe((res: any[]) => {
          this.dataSource = res;
        });
    else
      this.dataSource = this.Data;
    this.Control.valueChanges
      .pipe(
        takeUntil(this._onDestroy),
        startWith(''),
        map(val => this.filter(val)),
      ).subscribe();
  }
  filter(val: string): string[] {
    if (!isString(val))
      return [];
    if (this.AlwaysEmit && this.text != val && !this.emit)
      this.SelectChange.emit(null);
    this.text = val;
    this.emit = false;
    val = val || '';
    if (this.fnFilter == null)
      this.filterdata = this.dataSource.filter(item =>
        item[this.ViewOption].toLowerCase().includes(val.toLowerCase()));
    else
      this.filterdata = this.dataSource.filter(item => this.fnFilter(item, val.toLowerCase()));
    this.stopscroll = false;
    this.setPage(1);
    if(this.firstload&&this.filterdata.length>0)
    {
      this.autoComplete.opened.emit();
      this.firstload=false;
    }
  }
  remove(item: string): void {
    const index = this.values.indexOf(item);
    if (index >= 0) {
      this.values.splice(index, 1);
    }
    this.SelectChange.emit(this.values);
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    if (this.values.filter(s => s[this.KeyOption] == event.option.value[this.KeyOption]).length > 0) {
      this.el.nativeElement.value = '';
      this.Control.setValue(null);
      return;
    }
    this.emit = true;
    this.text = event.option.viewValue;
    this.values.push(event.option.value);
    this.SelectChange.emit(this.values);
    this.el.nativeElement.value = '';
    this.Control.setValue(null);
  }
  setPage(page: number) {
    this.pager = this._data.getPager(this.filterdata.length, page, 20);
    if (this.pager.totalPages == page)
      this.stopscroll = true;
    this.showdata = this.filterdata.slice(0, this.pager.endIndex + 1);
  }
  onScroll(event) {
    this.setPage(this.pager.currentPage + 1)
    if (event.callback)
      event.callback();
  }
  focus() {
    this.el.nativeElement.focus();
  }
  setValue(values) {
    this.values = values;
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  butonclick($event) {
    this.buttomChange.emit($event);
  }
}
