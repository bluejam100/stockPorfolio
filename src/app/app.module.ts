import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PortfolioComponent } from './pages/porfolio/portfolio.component';
import {RouterModule, Routes } from "@angular/router";
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTableModule} from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ChartComponent} from "./components/chart/chart.component";
import { AddComponent } from './pages/add/add.component';
import { SellComponent } from './pages/sell/sell.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { EditComponent } from './pages/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from "@angular/common/http";
import {MaterialExampleModule} from '../material.module';
import { SuccessComponent } from './pages/success/success.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LoginComponent } from './login/login.component';




const appRoutes : Routes = [
  {path : '', component : HomepageComponent },
  {path : 'profile', component : PortfolioComponent},
  {path : 'profile/add', component : AddComponent},
  {path : 'profile/sell', component : SellComponent},
  {path : 'profile/delete', component : DeleteComponent},
  {path : 'profile/edit', component : EditComponent},
  {path : 'success', component : SuccessComponent},
  {path : 'login', component : LoginComponent},
  {path : 'login/profile', component : PortfolioComponent},
  {path : 'login/profile/add', component : AddComponent},
  {path : 'login/profile/sell', component : SellComponent},
  {path : 'login/profile/delete', component : DeleteComponent},
  {path : 'login/profile/edit', component : EditComponent},
  {path: '**', component: NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PortfolioComponent,
    ChartComponent,
    AddComponent,
    SellComponent,
    DeleteComponent,
    EditComponent,
    SuccessComponent,
    NotfoundComponent,
    PieChartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ScrollingModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MaterialExampleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
