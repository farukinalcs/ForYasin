import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/_helpers/helper.service';
import { TrendyolService } from '../trendyol/trendyol.service';

@Component({
  selector: 'app-turnike2',
  templateUrl: './turnike2.component.html',
  styleUrls: ['./turnike2.component.scss']
})
export class Turnike2Component implements OnInit {

  private unsubscribe: Subscription[] = [];
  turnike2: any = [];
  interval:any;


  constructor(
    public helper: HelperService,
    private trendyol: TrendyolService,
    private ref: ChangeDetectorRef,) { }
  

    ngOnInit(): void {

      this.getTurnike();
      
      this.interval = setInterval(() => {
        this.getTurnike();
      }, 2000);
    }

  getTurnike(){
    this.unsubscribe.push(this.trendyol.getTurnike(this.helper.userLoginModel.tokenid,this.helper.selectedTerminalId)
    .subscribe((data)=>{
      this.turnike2 = data;
      console.log("2",this.turnike2);
      this.ref.detectChanges();
      
    }))
  
  }
  tckn(number:string):string{
    const start = number.substring(0,2);
    const end = number.substring(9);
    const masked = start+"*******"+end;
    // alert(masked);
    // console.error(`Geçersiz koordinat değeri: ${masked}`);
    return masked;
  }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
    clearInterval(this.interval);
  }

}
