import { Injectable } from '@angular/core';
import { math } from '@amcharts/amcharts4/core';
@Injectable()
export class NumberService {
  public format(number: any, symbol: string = '', places: any = 4, thousand: string = '.', decimal: string = ','): string {
    if (!(number)) { number = '0'; }
    number = '' + number;
    places = 4; // mặc định 4 số lẻ
    let so = parseFloat(number) || 0;
    symbol = symbol !== undefined ? symbol : ''; // đơn vị
    thousand = thousand || '.';
    decimal = decimal || ',';
    if (number.includes('.') && number.indexOf('.') > -1) {
      places = number.substr(number.indexOf('.')).length > 4 ? 4 : number.substr(number.indexOf('.')).length;
    }
    const negative = parseFloat(number) < 0 ? '-' : '';
    so=Math.abs(so);
    const stso = so.toFixed(places);
    const i = stso.substr(0, (stso.indexOf('.') > -1 ? stso.indexOf('.') : stso.length));
    let sole = decimal + (stso.substr(stso.indexOf('.') > -1 ? stso.indexOf('.') + 1 : stso.length));
    if (parseInt(sole.substr(1), undefined) === 0 || sole.substr(1) === '') {
      sole = '';
    } else {
      do {
        if (sole.substr(sole.length - 1) === '0') {
          sole = sole.substr(0, sole.length - 1);
        } else {
          break;
        }
      }
      while (true);
    }
    let num = i.replace(/^0*/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, thousand);
    if (!num) { num = '0'; }
    return negative + num + sole + symbol;
  }
  public format_theodonvi(number: any, symbol: string = '', places: any = 4, thousand: string = '.', decimal: string = ','): string {
    const value = number;
    if (value > 999999999) {
      return this.format(value / 1000000000, symbol, places, thousand, decimal) + ' tỷ';
    }
    else if (value > 999999) {
      return this.format(value / 1000000, symbol, places, thousand, decimal) + ' triệu';
    }
    else if (value > 999) {
      return this.format(value / 1000, symbol, places, thousand, decimal) + ' nghìn';
    }
    else {
      return this.format(value, symbol, places, thousand, decimal) + ' đồng';
    }
  }
}
