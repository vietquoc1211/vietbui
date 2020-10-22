import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { DataService } from "../../../../_services/data.service";
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';
export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
@Component({
    selector: "header-baocao-month",
    templateUrl: './header-baocao-month.component.html',
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ]
})
export class HeaderBaoCaoMonthComponent {
    @Output() changedate = new EventEmitter<any>();
     formdata: FormGroup = new FormGroup({
        ctrlfromDate: new FormControl(moment(), [Validators.required]),
        ctrltoDate: new FormControl(moment(), [Validators.required]),
    });
    constructor(private _data: DataService) {
    }
    chosenYearHandler_fromdate(normalizedYear: Moment) {
        const ctrlValue = this.formdata.controls.ctrlfromDate.value||moment();
        ctrlValue.year(normalizedYear.year());
        this.formdata.controls.ctrlfromDate.setValue(ctrlValue);
    }
    chosenMonthHandler_fromdate(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.formdata.controls.ctrlfromDate.value||moment();
        ctrlValue.month(normalizedMonth.month());
        this.formdata.controls.ctrlfromDate.setValue(ctrlValue);
        datepicker.close();
    }
    chosenYearHandler_todate(normalizedYear: Moment) {
        const ctrlValue = this.formdata.controls.ctrltoDate.value||moment();
        ctrlValue.year(normalizedYear.year());
        this.formdata.controls.ctrltoDate.setValue(ctrlValue);
    }
    chosenMonthHandler_todate(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.formdata.controls.ctrltoDate.value||moment();
        ctrlValue.month(normalizedMonth.month());
        this.formdata.controls.ctrltoDate.setValue(ctrlValue);
        datepicker.close();
    }
    emiter() {
        if (this.formdata.invalid) { this._data.toastr_validator(); return; }
        const _from=this.formdata.controls.ctrlfromDate.value;
        const _to =this.formdata.controls.ctrltoDate.value;
        _from.startOf('month');
        _to.endOf('month');
        this.changedate.emit({ fromDate:_from.toDate(), toDate: _to.toDate() })
    }
}
