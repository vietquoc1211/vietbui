import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { DataService } from "src/app/_services/data.service";
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';
export const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY',
    },
    display: {
        dateInput: 'YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
@Component({
    selector: "header-baocao-year",
    templateUrl: './header-baocao-year.component.html',
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ]
})
export class HeaderBaoCaoYearComponent {
    @Output() changedate = new EventEmitter<any>();
     formdata: FormGroup = new FormGroup({
        ctrlfromDate: new FormControl(moment(), [Validators.required]),
        ctrltoDate: new FormControl(moment(), [Validators.required]),
    });
    constructor(private _data: DataService) {
    }
    chosenYearHandler_fromdate(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.formdata.controls.ctrlfromDate.value||moment();
        ctrlValue.year(normalizedYear.year());
        this.formdata.controls.ctrlfromDate.setValue(ctrlValue);
        datepicker.close();
    }
    chosenYearHandler_todate(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.formdata.controls.ctrltoDate.value||moment();
        ctrlValue.year(normalizedYear.year());
        this.formdata.controls.ctrltoDate.setValue(ctrlValue);
        datepicker.close();
    }
    emiter() {
        if (this.formdata.invalid) { this._data.toastr_validator(); return; }
        const _from=this.formdata.controls.ctrlfromDate.value;
        const _to =this.formdata.controls.ctrltoDate.value;
        _from.startOf('year');
        _to.endOf('year');
        this.changedate.emit({ fromDate: this.formdata.controls.ctrlfromDate.value.toDate(), toDate: this.formdata.controls.ctrltoDate.value.toDate() })
    }
}
