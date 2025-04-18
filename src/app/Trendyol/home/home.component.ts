import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HelperService } from 'src/app/_helpers/helper.service';
import { TrendyolService } from '../trendyol/trendyol.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  selectedGrid: number = 1;

  gridCount :any = [
    {id:1,text:"1"},
    {id:2,text:"2"},
    {id:3,text:"3"},
    {id:4,text:"4"},
    {id:5,text:"5"},
    {id:6,text:"6 ve daha fazlası"}]

  terminal:any=[];

  selectedTerminal:number;

  private unsubscribe: Subscription[] = [];

  constructor(
    private router:Router,
    public helper: HelperService,
    private trendyol:TrendyolService,
    private ref: ChangeDetectorRef,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   
    this.getTerminal();

  }
  getTerminal(){
    
    this.unsubscribe.push(this.trendyol.getTerminal(this.helper.userLoginModel.tokenid)
    .subscribe((data)=>{
      this.terminal = data;
      console.log("terminal",this.terminal);
      this.ref.detectChanges();
    }))
    
  }

  goToturnike(){

    this.helper.selectedGridCount = this.selectedGrid;
 
    this.helper.selectedTerminalId = this.selectedTerminal;
    console.log("selectedTerminal",this.selectedTerminal);
 
    if(this.selectedTerminal != undefined && this.selectedTerminal != null)
    {
      this.router.navigate(['/turnike']);
    }
    else{
      this.toastr.error("LÜTFEN CİHAZ SEÇİMİ YAPIN");
    }
   
  }

  // setDisplay(){
  //   console.log("SELECTED GRİD",this.selectedGrid);
  //   this.helper.selectedGridCount = this.selectedGrid;
  //   console.log("SELECTED helper",this.helper.selectedGridCount);
  //   this.router.navigate(['/setdisplay']);
   
  // }
  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
