import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import {RouterModule, Routes } from "@angular/router";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from "@angular/material/table";
import {Chart} from 'node_modules/chart.js';




const appRoutes : Routes = [
  {path : '', component : HomepageComponent },
  {path : 'profile', component : PorfolioComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PorfolioComponent
  ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), ScrollingModule, MatTableModule, Chart
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
