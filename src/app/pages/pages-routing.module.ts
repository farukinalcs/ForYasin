import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../Trendyol/home/home.component';
import { SetdisplayComponent } from '../Trendyol/setdisplay/setdisplay.component';
import { Turnike6Component } from '../Trendyol/turnike6/turnike6.component';
import { LayoutComponent } from './_layout/layout.component';
import { TurnikeComponent } from '../Trendyol/turnike/turnike.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    // canActivate: [ProcessGuard],
    children: [
      {
        path: "home", // <= Page URL     
        component: HomeComponent, // <= Page component registration
        //  canActivate: [ProcessGuard],
 
      },
      {
        path: "turnike", // <= Page URL     
        component: TurnikeComponent, // <= Page component registration
        //  canActivate: [ProcessGuard],
 
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      // {
      //   path: "**",
      //   redirectTo: "Profile/Dashboard",
      //   component: AccessDeviceReaderComponent 
      // },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
