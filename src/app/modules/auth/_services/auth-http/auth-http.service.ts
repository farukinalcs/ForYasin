import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../_models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../_models/auth.model';
 


// const API_USERS_URL = `${environment.apiUrl}/LoginRaporStore`;
// const API_USERS_URL = `${environment.apiUrl}/Login`;

// const API_URL =`${environment.apiUrl}/MonitorLogin`;

const API_URL =`${environment.apiUrl}/Login`;



@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
 // loginCustomerCode = "ANGELDEMO14372";
  loginModuleId: number;
  loginTokenId: number;
  tokenid:number;
  usertype:number;
  loginUserId:number;
  loginUserFullName:string;
 
 
  data:any;
  // public currentTokenListener: EventEmitter<any> = new EventEmitter();
  // public currentToken;
  constructor(private http: HttpClient) {}


  login(email:string,password:string): Observable<any>{
    var params = {Name :'LoginName='+email+'&Password='+password+'&ldap=0'}
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      let options = {headers : headers};
      // console.log("HELPER1",this.helper.frameCustomerCode)
      return this.http.get<AuthModel>(API_URL,{params});
  }

  // login(email:string,password:string,customerCode:string): Observable<any>{
  //   var params = {Param :'username='+email+'&password='+password+'&customercode='+customerCode}
  //     let headers = new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     });
  //     let options = {headers : headers};
  //     return this.http.post<AuthModel>(API_USERS_URL,params,options);
  // }

  getUserByToken(token: string): Observable<any> {
    return of(true);
  }
}
