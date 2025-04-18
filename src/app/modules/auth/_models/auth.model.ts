export class AuthModel {

  // customerid: number;
  // customerName: string;
  // id: number;
  // islemno: string;
  // islemsonuc: number;
  // mail: string;
  // module: string;
  // name: string;
  // phone: string;
  // repo: any;
  // reportright: number;
  // sunucucevap: string;
  // surname: string;
  // tokenid: string;
  // usertype: number;
  // yetki: any;
  id:number;
  loginname:string;
  extloginname:string;
  access:string;
  accessmenu: boolean;
  admin:boolean;
  bolum:number;
  customerName:string;
  customerCode:string;
  islemno:string;
  kademe:number;
  xsicilid:number;
  tokenid:string;
  yetki:number;
  gorev:number;
  terminalgrubu:number;
  terminalgroup:number;
  islemsonuc:number;

  setAuth(auth: any) {
    this.id = auth.id;
    this.loginname =  auth.loginname;
    this.extloginname = auth.extloginname;
    this.access = auth.access;
    this.accessmenu = auth.accessmenu;
    this.admin = auth.admin;
    this.bolum = auth.bolum;
    this.customerName = auth.customerName;
    this.customerCode = auth.customerCode;
    this.islemno = auth.islemno;
    this.kademe = auth.kademe;
    this.xsicilid = auth.xsicilid;
    this.tokenid = auth.tokenid;
    this.yetki = auth.yetki;
    this.gorev = auth.gorev;
    this.terminalgrubu = auth.terminalgrubu;
    this.terminalgroup = auth.terminalgroup;
    this.islemsonuc = auth.islemsonuc;

    // this.customerid = auth.customerid;
    // this.mail = auth.mail;
    // this.name = auth.name;
    // this.phone = auth.phone;
    // this.repo = auth.repo;
    // this.reportright = auth.reportright;
    // this.sunucucevap = auth.sunucucevap;
    // this.surname = auth.surname;
    // this.usertype = auth.usertype;
   
  }
}
