import { Injectable, EventEmitter } from '@angular/core';
import { LoginService } from './login.service';
import { UrlConstants } from '../_common/UrlConstants';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Injectable()
export class SignalrService {
  private proxy: any;
  private proxyName: string = 'ChangeHub';
  private connection: any;

  public TiepDon_Received: EventEmitter<any>;
  public KhamBenh_Received: EventEmitter<any>;
  public VienPhi_Received: EventEmitter<any>;
  public GoiLCD_Recevied: EventEmitter<any>;

  public connectionEstablished: EventEmitter<Boolean>;
  public connectionExists: Boolean;

  constructor(private _authenService: LoginService, private _toastr: ToastrService) {

    this.connectionEstablished = new EventEmitter<Boolean>();
    this.TiepDon_Received = new EventEmitter<any>();
    this.KhamBenh_Received = new EventEmitter<any>();
    this.VienPhi_Received = new EventEmitter<any>();
    this.GoiLCD_Recevied = new EventEmitter<any>();

    this.connectionExists = false;
    this.connection = $.hubConnection(UrlConstants.BASE_API);
    this.connection.qs = { "token": _authenService.getLoggedInUser().token };
    this.proxy = this.connection.createHubProxy(this.proxyName);
    this.TiepDon_registerOnServerEvents();
    this.ViewLCD_registerOnServerEvents();
    this.startConnection();
  }
  private startConnection(): void {
    this.connection.start().done((data: any) => {
      this.connectionEstablished.emit(true);
      this.connectionExists = true;
    }).fail((error: any) => {
      console.log('Could not connect ' + error);
      this.connectionEstablished.emit(false);
    });
  }
  private TiepDon_registerOnServerEvents(): void {
    this.proxy.on('addTiepDon', (res: any) => {
      if (res && (res.Kham || res.TiepDon)) {
        this.TiepDon_Received.emit(res);
      }
    });
  }
  private ViewLCD_registerOnServerEvents(): void {
    this.proxy.on('ViewLCD', (res: any) => {
      this.GoiLCD_Recevied.emit(res);
    });
  }
}
