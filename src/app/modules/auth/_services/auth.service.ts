import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
import { UserModel } from '../_models/user.model';
import { AuthModel } from '../_models/auth.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthHTTPService } from './auth-http/auth-http.service';

import { HelperService } from 'src/app/_helpers/helper.service';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  private isLoadingSubject: BehaviorSubject<boolean>;
  public authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  // public fields
  currentUser$: Observable<UserModel>;
  isLoading$: Observable<boolean>;
  currentUserSubject: BehaviorSubject<UserModel>;

  get currentUserValue(): UserModel {
    return this.currentUserSubject.value;
  }

  constructor(
    private authHttpService: AuthHTTPService,
    private router: Router,
    private helper: HelperService
    
  )
  {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<UserModel>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
    // const subscr = this.getUserByToken().subscribe();
    // this.unsubscribe.push(subscr);
  }
  // public methods
  login(email: string, password: string): Observable<any> {
    this.isLoadingSubject.next(true);

    return this.authHttpService.login(email, password).pipe(
      map((auth: any) => {
        const result = this.setAuthFromLocalStorage(auth[0]);
        if (result) {

          var AuthModel = this.getAuthFromLocalStorage();
          if (AuthModel == null) {
            return of(undefined);
          }
          // var user = { fullname: "", username: "", id: null, tokenid: "" };
          var user = { loginname:"",gorev:null,yetki:null,bolum:null,kademe:null,xsicilid:null,extloginname:"", customerName: "", id: null, tokenid: "",islemno:'',access:"",accessmenu:true,admin:false};

          user=AuthModel;
          this.helper.userLoginModel= AuthModel;
          this.currentUserSubject = new BehaviorSubject<any>(user);
          this.isLoadingSubject.next(false)
      
          return this.currentUserSubject;
        }
      }),

      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
 


  logout() {
    localStorage.removeItem(this.authLocalStorageToken);
    this.router.navigate(['/auth/login'], {
      queryParams: {},
    });
  }


  getUserByToken(): Observable<any> {


    var AuthModel = this.getAuthFromLocalStorage();
    if (AuthModel == null) {
      return of(undefined);
    }
    var user = { fullname: "", username: "", id: null, tokenid: "",extloginname:"" };
    user.fullname = AuthModel.customerName;
    user.username = AuthModel.loginname;
    user.id = AuthModel.id;
    user.tokenid = AuthModel.tokenid;
    user.extloginname = AuthModel.extloginname;
    this.helper.userLoginModel = user;
    
    const auth = this.getAuthFromLocalStorage();
    if (!auth || !auth.tokenid) {
      return of(undefined);
    }

    this.isLoadingSubject.next(true);
    return this.authHttpService.getUserByToken(auth.tokenid).pipe(
      map((result: any) => {

        if (result) {
          this.currentUserSubject = new BehaviorSubject<any>(user);
        } else {
          this.logout();
        }
        return result;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }


  // private methods
  public setAuthFromLocalStorage(auth: AuthModel): boolean {

    if (auth && auth.tokenid) {

      localStorage.setItem(this.authLocalStorageToken, JSON.stringify(auth));
      return true;
    }
    return false;
  }

  private getAuthFromLocalStorage(): AuthModel {
    try {
      const authData = JSON.parse(
        localStorage.getItem(this.authLocalStorageToken)
      );
      return authData;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
    // user.id = AuthModel.id;
          // user.loginname = AuthModel.loginname;
          // this.helper.userLoginModel.username = AuthModel.loginname;
          // this.helper.userLoginModel.extloginname = AuthModel.extloginname;
          // user.access = AuthModel.access;
          // user.accessmenu = AuthModel.accessmenu;
          // user.admin = AuthModel.admin;
          // user.bolum = AuthModel.bolum;
          // user.customerName = AuthModel.customerName;
          // user.xsicilid = AuthModel.xsicilid;
          // user.kademe = AuthModel.kademe;
          // user.tokenid = AuthModel.tokenid;
          // user.yetki = AuthModel.yetki;
          // user.gorev = AuthModel.gorev;
          // user.islemno = AuthModel.islemno;
          // this.helper.userLoginModel.admin = AuthModel.admin;
          // this.helper.userLoginModel = user;
}
