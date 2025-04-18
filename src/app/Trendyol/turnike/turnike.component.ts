import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/_helpers/helper.service';

@Component({
  selector: 'app-turnike',
  templateUrl: './turnike.component.html',
  styleUrls: ['./turnike.component.scss']
})
export class TurnikeComponent implements OnInit {

  constructor(public helper : HelperService) { }

  ngOnInit(): void {
    
  }

}
