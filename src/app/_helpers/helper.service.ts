import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {}

  //userLoginModel:any={fullname:"",username:"",id:null,tokenid:"",admin:false,extloginname:""}
  userLoginModel:any={ loginname:"",gorev:null,yetki:null,bolum:null,kademe:null,xsicilid:null,extloginname:"", customerName: "", id: null, tokenid: "",islemno:'',access:"",accessmenu:true,admin:false}

   frameCustomerCode:any="";
   frameOriginUrl:any="";
   frameApiUrl:any="";
   frameTokenId:any="";
   frameEvent:any=""
   frameReportDwnld:any="";
 
   frameModuleId: BehaviorSubject<any> = new BehaviorSubject<any>("");
   frameModuleId$: Observable<any> = this.frameModuleId.asObservable();

   public selectedGridCount:number = null;
   public selectedTerminalId:number = null;
  
  //  public frameReportStatusListener: EventEmitter<any> = new EventEmitter();
  //  public frameReportStatus2: string; 
  requestModel:any={grupadi:"",grupid:null,terminaladi:"",terminalid:null,Yetkili1:"",Yetkili2:""}

}
