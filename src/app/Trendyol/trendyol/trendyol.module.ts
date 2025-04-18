import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { TurnikeComponent } from '../turnike/turnike.component';
import { Turnike1Component } from '../turnike1/turnike1.component';
import { Turnike2Component } from '../turnike2/turnike2.component';
import { Turnike3Component } from '../turnike3/turnike3.component';
import { Turnike4Component } from '../turnike4/turnike4.component';
import { Turnike5Component } from '../turnike5/turnike5.component';
import { Turnike6Component } from '../turnike6/turnike6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SetdisplayComponent } from '../setdisplay/setdisplay.component';





@NgModule({
  declarations: [
    HomeComponent,
    TurnikeComponent, 
    Turnike1Component,
    Turnike2Component, 
    Turnike3Component, 
    Turnike4Component, 
    Turnike5Component, 
    Turnike6Component, 
    SetdisplayComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class TrendyolModule { }
