import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { FormControl } from '@angular/forms';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { MatAutocomplete } from '@angular/material';
@Component({
  selector: 'autocomplete',
  template: `
          <mat-form-field>
            <input [formControl]="Control" [placeholder]="Title" matInput [matAutocomplete]="auto" #el>
              <mat-autocomplete [stopScroll]="stopscroll" #auto="matAutocomplete" class="autocomplete" [panelWidth]="panelWidth"  (optionsScroll)="onScroll($event)">
                    <mat-option class="item" [ngClass]="itemClass" *ngFor="let item of showdata;let i = index" 
                    [value]="item[ViewOption]" [disabled]="item.disabled" (onSelectionChange)="selectionChange($event,item)">
                      <ng-container *ngTemplateOutlet="itemTemplate; context: {item:item}">
                      </ng-container>
                    </mat-option>
                <mat-option *ngIf="searching" class='loadding'><mat-progress-bar mode="indeterminate"></mat-progress-bar></mat-option>
              </mat-autocomplete>
          </mat-form-field>`
})
export class AutocompleteComponent implements OnInit, OnDestroy {
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
  @Input() Data: any[] = null;
  @Input() Control = new FormControl();
  @Input() panelWidth: string = '';
  @Input() itemClass: string = '';
  @Output() SelectChange = new EventEmitter<FormControl>();
  @Input() fnFilter: any = null;
  private text: string = '';
  private emit: boolean = false;
  public searching: boolean = false;
  private dataSource: any[] = [];
  public FilterCtrl: FormControl = new FormControl();
  public filtered: Observable<string[]>;
  protected _onDestroy = new Subject<void>();
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
  filter(val: string) {
    if (this.AlwaysEmit && this.text != val && !this.emit)
      this.SelectChange.emit(null);
    this.text = val;
    this.emit = false;
    val = val || '';
    if (this.fnFilter == null)
      this.filterdata = this.dataSource.filter(item =>
        this._data.vietnamse(item[this.ViewOption]).toLowerCase().includes( this._data.vietnamse(val).toLowerCase()));
    else
      this.filterdata = this.dataSource.filter(item => this.fnFilter(item, val.toLowerCase()));
    this.stopscroll = false;
    this.setPage(1)
    if(this.firstload&&this.filterdata.length>0)
    {
      this.autoComplete.opened.emit();
      this.firstload=false;
    }
  }
  protected selectionChange(event: any, value: any) {
    this.text = value[this.ViewOption];
    this.emit = true;
    if (event.isUserInput)
      this.SelectChange.emit(value);
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
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}
