import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/_helpers/helper.service';
import { TrendyolService } from '../trendyol/trendyol.service';

@Component({
  selector: 'app-turnike6',
  templateUrl: './turnike6.component.html',
  styleUrls: ['./turnike6.component.scss']
})
export class Turnike6Component implements OnInit {

  private unsubscribe: Subscription[] = [];

  turnike6: any = [];
  interval:any;

  constructor(
    public helper: HelperService,
    private trendyol: TrendyolService,
    private ref: ChangeDetectorRef,) { }


  ngOnInit(): void {

    this.getTurnike();

    this.interval = setInterval(() => {
      this.getTurnike();
    }, 3000);

    
  }

  getTurnike() {
    this.unsubscribe.push(this.trendyol.getTurnike(this.helper.userLoginModel.tokenid,this.helper.selectedTerminalId)
      .subscribe((data) => {
        this.turnike6 = data;
        console.log("6",this.turnike6);
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
