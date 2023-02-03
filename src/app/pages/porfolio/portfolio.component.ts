import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Chart, registerables} from "chart.js";
import data, {DateToValue, Serial, Transaction} from "../../Data";
import {StockService} from "../../core/StockService";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

import {MatTableDataSource} from "@angular/material/table";
Chart.register(...registerables);







@Component({
  selector: 'app-porfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PortfolioComponent implements OnInit {


  //constructor(private stockService: StockService) { }

  public todayDate : Date = new Date(Date());
  public formatTodayDate : string = this.todayDate.toDateString();
  public displayedColumns: string[] = ['id', 'name', 'type', 'share', 'price', 'date'];

  public dataSource: any;
  public chartObject: any;
  public portfolioValueNow: string;
  public totalInvested: string;
  public netProfit: string;

  public dateLabels: string[] = [];
  public portfolioValue: number[] = [];

  constructor(private service: StockService) {}

  posts: any;


  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        this.portfolioValue = this.posts.chart.map((share: any) => share.sharePrice);
        this.dateLabels = this.posts.chart.map((share: any) => share.shareDate);

        for (let i = 0 ; i < this.dateLabels.length; i++){

          if (i==0 || i == (this.dateLabels.length)-1 ){
            this.dateLabels[i] = this.dateLabels[i] ;
          }
          else{this.dateLabels[i]= ""}
        }


        var myChart = new Chart("myChart", {
          type: 'line',
          data: {
            labels: this.dateLabels,
            datasets: [{
              label: 'Porfolio Value',
              data: this.portfolioValue,
              backgroundColor: [
                'rgba(34, 85, 89, 0.2)'],
              borderColor: [
                'rgba(34, 85, 89, 1)'],
              fill: true
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display:false,
                },
              title: {
                display: true,

              },
              tooltip: {
                mode: 'index'
              },

            },
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
            },
            scales: {
              x: {
                title: {
                  display: false,
                  text: 'Month'
                }
              },
              y: {
                stacked: true,
                title: {
                  display: false,
                  text: 'Value'
                }
              }
            }
          }


        }
        )
        }


        // Subscribe ends here
      )




  }
}

