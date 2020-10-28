import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { DataService } from "src/app/_services/data.service";
@Component({
    selector: "header-baocao",
    templateUrl: './header-baocao.component.html'
})
export class HeaderBaoCaoComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() title: string = '';
    @Output() changedate = new EventEmitter<any>();
    private custom: boolean = false;
    public Loai: string = 'Date';
    public formdata: FormGroup = new FormGroup({
        ctrlfromDate: new FormControl(new Date(), [Validators.required]),
        ctrltoDate: new FormControl(new Date(), [Validators.required]),
    });
    constructor(private _data: DataService) {
    }
    ngOnInit() {
    }
    customdate(e) {
        e.stopPropagation();
    }
    ngAfterViewInit() {
        $('.m-header-head').addClass('clearbox');
    }
    changeloai(event) {
        const key = $(event.target).data('key');
        const text = $(event.target).text();
        $('#dropdowntuychonloai').text(text);
        this.Loai = key;
        if(this.Loai=='Date')
        {
            this.formdata = new FormGroup({
                ctrlfromDate: new FormControl(new Date(), [Validators.required]),
                ctrltoDate: new FormControl(new Date(), [Validators.required]),
            });
        }
        $(event.target).parents('ul').find('li').removeClass('active');
        $(event.target).addClass('active')
    }
    change(event) {
        const key = $(event.target).data('key')
        let _from = new Date();
        let _to = new Date();
        if (key == 'yesterday') {
            _from.setDate(_from.getDate() - 1);
        }
        else if (key == 'last7days') {
            _from.setDate(_from.getDate() - 7);
        }
        else if (key == 'last30days') {
            _from.setDate(_from.getDate() - 30);
        }
        else if (key == 'thismonth') {
            _from.setDate(1);
        }
        else if (key == 'lastmonth') {
            _from.setDate(1);
            _from.setMonth(_from.getMonth() - 1);
            _to.setDate(0);
        }
        const _parent = $(event.target).parents('.kt-subheader__toolbar');
        _parent.find('li[data-key],a[data-key]').each((i, el) => {
            if ($(el).data('key') == key)
                $(el).addClass('active');
            else
                $(el).removeClass('active');
        })
        this.formdata.controls.ctrlfromDate.setValue(_from);
        this.formdata.controls.ctrltoDate.setValue(_to);
        setTimeout(() => {
            this.emiter();
        })
    }
    emiter() {
        if (this.formdata.invalid) { this._data.toastr_validator(); return; }
        this.changedate.emit({ fromDate: this.formdata.controls.ctrlfromDate.value, toDate: this.formdata.controls.ctrltoDate.value, Loai: this.Loai })
    }
    componentchangedate(event) {
        this.changedate.emit({ fromDate: event.fromDate, toDate: event.toDate, Loai: this.Loai })
    }
    ngOnDestroy() {
        $('.m-header-head').removeClass('clearbox');
    }
}
