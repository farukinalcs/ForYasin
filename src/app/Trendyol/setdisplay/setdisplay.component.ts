import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/_helpers/helper.service';

@Component({
  selector: 'app-setdisplay',
  templateUrl: './setdisplay.component.html',
  styleUrls: ['./setdisplay.component.scss']
})
export class SetdisplayComponent implements OnInit {

  constructor(private router:Router,public helper: HelperService) { }

  ngOnInit(): void {
  }
  goToturnike(){
    this.router.navigate(['/turnike']);
  }
}
