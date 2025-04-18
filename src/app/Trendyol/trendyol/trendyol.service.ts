import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_DYNAMİC = `${environment.apiUrl}/Dynamic`;

@Injectable({
  providedIn: 'root'
})
export class TrendyolService {

  constructor(private http : HttpClient) { }

  getTurnike(token,terminalgrubu):Observable<any>{
    var params = {Name:'tokenid='+ token + '&point=lastpass&islemtipi=pp&terminalgrubu='+terminalgrubu}
    return this.http.get<any>(API_DYNAMİC,{params});
  }

  getTerminal(token){
    var params = {Name:'tokenid='+ token + '&point=lastpass&islemtipi=tl'}
    return this.http.get<any>(API_DYNAMİC,{params});
  }
  
}
