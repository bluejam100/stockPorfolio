import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import data, {DateToValue, Serial, Transaction} from "../../Data";
import {StockService} from "../../core/StockService";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostService } from "../../core/pokeapi.service";
import {MatTableDataSource} from "@angular/material/table";
Chart.register(...registerables);




// const ELEMENT_DATA: Transaction[] = [
//   {id: 1, name: 'Amazon', share: 1.0079, type: 'H', date: "2023-02-23"},
//   {id: 2, name: 'Apple', share: 4.0026, type: 'He', date: "2023-02-23"},
//   {id: 3, name: 'Google', share: 6.941, type: 'Li', date: "2023-02-23"},
//   {id: 4, name: 'Meta', share: 9.0122, type: 'Be', date: "2023-02-23"},
//   {id: 5, name: 'Netflix', share: 10.811, type: 'B', date: "2023-02-23"},
//   {id: 1, name: 'Hydrogen', share: 1.0079, type: 'H', date: "2023-02-23"},
//   {id: 2, name: 'Helium', share: 4.0026, type: 'He', date: "2023-02-23"},
//   {id: 3, name: 'Lithium', share: 6.941, type: 'Li', date: "2023-02-23"},
//   {id: 4, name: 'Beryllium', share: 9.0122, type: 'Be', date: "2023-02-23"},
//   {id: 5, name: 'Boron', share: 10.811, type: 'B', date: "2023-02-23"},
//
// ];




@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PortfolioComponent implements OnInit {


  //constructor(private stockService: StockService) { }

  //public todayDate : Date = new Date(Date());
  //public formatTodayDate : string = this.todayDate.toDateString();
  public displayedColumns: string[] = ['id', 'name', 'type', 'share', 'price', 'date'];

  public dataSource: any;
  public chartObject: any;
  public portfolioValueNow: string;
  public totalInvested: string;
  public netProfit: string;

  public dateLabels: string[] = [];
  public portfolioValue: number[] = [];

  constructor(private service: StockService) {
  }

  posts: any;

  // public formatLabel(chartObject: any) {
  //
  //   this.returnedChart = this.chartObject.chart;
  //   this.dateLabels = this.returnedChart.map((object: { shareDate: any; }) => object.shareDate);
  //
  //   this.portfolioValue = this.chartObject.map((object: { sharePrice: string; }) => parseFloat(object.sharePrice));
  //
  //   for (let i = 0; i < this.dateLabels.length; i++) {
  //
  //     if (i == 0 || i == (this.dateLabels.length) - 1) {
  //       this.dateLabels[i] = this.dateLabels[i];
  //     } else {
  //       this.dateLabels[i] = ""
  //     }
  //     ;
  //   }
  //
  //
  // }


  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;


      });


  }
}

