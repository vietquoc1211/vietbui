import { Component, OnInit, ViewChild } from "@angular/core";
import { SystemConstants } from "src/app/_common/SystemConstants";
import {
  FormControl,
  Validators,
  FormGroup,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ErrorStateMatcher, MatTabChangeEvent } from "@angular/material";
import { DataService } from "src/app/_services/data.service";
import { ValidatorConstants } from "src/app/_common/ValidatorConstants";
import { isNullOrUndefined } from "util";
import { UrlConstants } from "src/app/_common/UrlConstants";
@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html"
})
export class MyProfileComponent {
  public hidepasscurrent = true;
  public hidepassnew = true;
  public hidepassconfirm = true;
  matcher = new MyErrorStateMatcher();
  public URL: any;
  public isLoading = false;
  public issave: boolean = false;
  private API = "/api/AppUser";
  private APIP = "/api/Profile";
  public const_data: any = {};
  public sys_const = SystemConstants;
  public vali_const = ValidatorConstants;
  public formdata: FormGroup;
  public formdataPassword: FormGroup;
  public beforeQH: Function = o => {
    return o.matt == null;
  };
  public beforePX: Function = o => {
    return o.maqh == null;
  };
  @ViewChild("canvas") canvas: HTMLElement;
  reader: FileReader;
  newimg: string | ArrayBuffer;
  newimgResize: string | ArrayBuffer;
  fileupload: any;

  constructor(public _data: DataService) {
    this.loaddata();
  }
  checkPasswords(group: FormGroup) {
    let pass = group.controls.Password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
  createform() {
    this.formdata = new FormGroup({
      HoTen: new FormControl("", [
        Validators.required,
        Validators.pattern(this.vali_const.v_fullname)
      ]),
      NgaySinh: new FormControl("", [
        Validators.required,
        Validators.maxLength(20)
      ]),
      GioiTinh: new FormControl("1", [Validators.required]),
      SDT: new FormControl("", [
        Validators.required,
        Validators.pattern(this.vali_const.v_phone)
      ]),
      Email: new FormControl("", [
        Validators.required,
        Validators.pattern(this.vali_const.v_email)
      ]),
      DiaChi: new FormControl("", [Validators.maxLength(250)]),
      MaTinhThanh: new FormControl(null, [Validators.required]),
      MaQuanHuyen: new FormControl(null, [Validators.required]),
      MaPhuongXa: new FormControl(null, [Validators.required]),
      GhiChu: new FormControl("")
    });
  }
  createFormPassword() {
    const newuser = this.const_data.Id == null;
    this.formdataPassword = new FormGroup(
      {
        CurrentPassword: new FormControl("", [Validators.required]),
        Password: new FormControl(
          "",
          newuser
            ? [
              Validators.required,
              Validators.pattern(this.vali_const.v_password)
            ]
            : [Validators.pattern(this.vali_const.v_password)]
        ),
        confirmPassword: new FormControl("")
      },
      this.checkPasswords
    );
  }
  loaddata() {
    this.createform();
    this.createFormPassword();
    this.isLoading = true;
    this._data.get(this.APIP + "/getbyusername").subscribe(
      (res: any) => {
        this.isLoading = false;
        this.const_data = res;
        this.setvalueform(this.const_data);
        this.URL = UrlConstants.BASE_API + "/img/profile/";
        $(".m-topbar__userpic>img,.m-card-user__pic>img").attr(
          "src",
          this.URL + this.const_data.Anh
        );
      },
      error => {
        this._data.handleError(error);
        this.isLoading = false;
      }
    );
  }
  setvalueform(values: any) {
    this.formdata.controls.HoTen.setValue(values.HoTen);
    this.formdata.controls.NgaySinh.setValue(values.NgaySinh);
    this.formdata.controls.GioiTinh.setValue("" + (values.GioiTinh || 1));
    this.formdata.controls.SDT.setValue(values.SDT);
    this.formdata.controls.Email.setValue(values.Email);
    this.formdata.controls.DiaChi.setValue(values.DiaChi);
    this.formdata.controls.MaTinhThanh.setValue(values.MaTinhThanh);
    this.formdata.controls.MaQuanHuyen.setValue(values.MaQuanHuyen);
    this.formdata.controls.MaPhuongXa.setValue(values.MaPhuongXa);
    this.formdata.controls.GhiChu.setValue(values.GhiChu);
    this.beforeQH = o => {
      return o.matt == values.MaTinhThanh;
    };
    this.beforePX = o => {
      return o.maqh == values.MaQuanHuyen;
    };
  }
  ChangeForm(values) {
    if (this.formdata.invalid) {
      this._data.toastr_validator();
      return;
    }
    this.const_data.MaNV = this.const_data.MaNV;
    this.const_data.HoTen = values.HoTen;
    this.const_data.NgaySinh = values.NgaySinh;
    this.const_data.GioiTinh = values.GioiTinh.id;
    this.const_data.SDT = values.SDT;
    this.const_data.Email = values.Email;
    this.const_data.DiaChi = values.DiaChi;
    this.const_data.MaTinhThanh = values.MaTinhThanh.id;
    this.const_data.MaQuanHuyen = values.MaQuanHuyen.id;
    this.const_data.MaPhuongXa = values.MaPhuongXa.id;
    this.const_data.GhiChu = values.GhiChu;
    this.const_data.NgaySua = new Date();
    this._data
      .post(this.APIP + "/updatedanhsachnhanvientheomanv", this.const_data)
      .subscribe(
        (res: any) => {
          if (res.Loi) {
            this._data.toastr_duplicate_error();
            this.issave = false;
            return;
          }
          this.issave = false;
          this._data.toastr_update_success();
          this.const_data.GioiTinh = null;
          this.const_data.MaTinhThanh = null;
          this.const_data.MaQuanHuyen = null;
          this.const_data.MaPhuongXa = null;
          this.const_data.NgaySua = null;
          this.loaddata();
        },
        error => {
          this._data.handleError(error);
        }
      );
  }
  ChangePassword(values) {
    if (this.formdataPassword.invalid) {
      this._data.toastr_validator();
      return;
    }
    this.issave = true;
    let isadd = isNullOrUndefined(this.const_data.Id);
    this._data
      .post(
        this.APIP +
        `/updatepassword/${this.const_data.Id}?currentPassword=${
        values.CurrentPassword
        }&password=${values.Password}`
      )
      .subscribe(
        (res: any) => {
          if (res.Loi) {
            this._data.toastr_currentpassword_error();
            this.issave = false;
            return;
          }
          if (res.statuscode == 200) {
            this.issave = false;
            this._data.toastr_save_success(isadd);
            this.loaddata();
          }
          if (res.statuscode == 500) {
            this._data.toastr_currentpassword_error();
            this.issave = false;
            return;
          }
        },
        error => {
          this._data.handleError(error);
          this.issave = false;
        }
      );
  }
  reload() {
    this.const_data.GioiTinh = null;
    this.const_data.MaTinhThanh = null;
    this.const_data.MaQuanHuyen = null;
    this.const_data.MaPhuongXa = null;
    this.loaddata();
  }
  changetinhthanh(event) {
    this.formdata.controls.TinhThanh = event;
    if (event && event.value)
      this.beforeQH = o => {
        return o.matt == event.value.id;
      };
    else
      this.beforeQH = o => {
        return o.matt == null;
      };
    this.beforePX = o => {
      return o.maqh == null;
    };
  }
  changequanhuyen(event) {
    this.formdata.controls.QuanHuyen = event;
    if (event && event.value)
      this.beforePX = o => {
        return o.maqh == event.value.id;
      };
    else
      this.beforePX = o => {
        return o.maqh == null;
      };
  }
  changephuongxa(event) {
    this.formdata.controls.PhuongXa = event;
  }
  getErrorMessage() {
    return this.formdata.controls.Email.hasError("required")
      ? "You must enter a value"
      : this.formdata.controls.Email.hasError("email")
        ? "Not a valid email"
        : "";
  }
  updateAvatar(e) {
    if (e) {
      this.reader = new FileReader();
      let file = e.target.files[0];
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      var dataurl: any;
      img.onload = () => {
        var canvas = document.createElement("canvas");
        var maxWidth = 200;
        var maxHeight = 100;
        var width = img.width;
        var height = img.height;
        var TLWidth = maxWidth / img.width;
        var TLHeight = maxHeight / img.height;
        var TL = Math.min(TLWidth, TLHeight);
        if (img.width > img.height) {
          if (img.width > maxWidth) {
            height *= TLWidth;
            width = maxWidth;
          }
        } else {
          if (img.height > maxHeight) {
            width *= TLHeight;
            height = maxHeight;
          }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        this.newimgResize = canvas.toDataURL();
        this.saveAvatar();
      };

      this.reader.onloadend = () => {
        var dataurl = canvas.toDataURL();
        this.newimg = this.reader.result;
        img.src = this.newimg.toString();
      };
      if (file) this.reader.readAsDataURL(file);
      this.fileupload = file;
    } else {
      return;
    }
  }
  saveAvatar() {
    let image_data: any = {};
    image_data.Anh = this.newimgResize;
    image_data.NhanVienID = this.const_data.NhanVienID;
    this._data.post(this.APIP + `/updateavatarnhanvien`, image_data).subscribe(
      (res: any) => {
        if (res.Loi) {
          this._data.toastr_duplicate_error();
          this.issave = false;
          return;
        }
        this.const_data.Anh = res.Anh;
        this._data.toastr_update_success();
        let cacheuser = JSON.parse(
          localStorage.getItem(SystemConstants.CURRENTUSER)
        );
        cacheuser.avatar = res.Anh;
        localStorage.setItem(
          SystemConstants.CURRENTUSER,
          JSON.stringify(cacheuser)
        );
        $(".m-topbar__userpic>img,.m-card-user__pic>img").attr(
          "src",
          this.URL + res.Anh
        );
        this.issave = false;
      },
      error => {
        this._data.handleError(error);
        this.issave = false;
      }
    );
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    if (tabChangeEvent.index === 1) {
      this.createFormPassword();
    }
  }
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const group = control.parent as FormGroup;
    const pass = group.controls.Password;
    const confirmPass = group.controls.confirmPassword;
    return pass.invalid || !(pass.value === confirmPass.value);
  }
}
