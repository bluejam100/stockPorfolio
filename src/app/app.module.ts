import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PorfolioComponent } from './pages/porfolio/porfolio.component';
import {RouterModule, Routes } from "@angular/router";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChartComponent} from "./components/chart/chart.component";
import { AddComponent } from './pages/add/add.component';
import { SellComponent } from './pages/sell/sell.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EditComponent } from './pages/edit/edit.component';


const appRoutes : Routes = [
  {path : '', component : HomepageComponent },
  {path : 'profile', component : PorfolioComponent},
  {path : 'profile/add', component : AddComponent},
  {path : 'profile/sell', component : SellComponent},
  {path : 'profile/delete', component : DeleteComponent},
  {path : 'profile/edit', component : EditComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PorfolioComponent,
    ChartComponent,
    AddComponent,
    SellComponent,
    DeleteComponent,
    EditComponent
  ],
    imports: [
        BrowserModule, RouterModule.forRoot(appRoutes), ScrollingModule, MatTableModule, BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
