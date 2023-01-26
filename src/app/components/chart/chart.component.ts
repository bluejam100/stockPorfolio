import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import data, {DateToValue, Serial} from "../../Data";
import {PostService } from "../../core/pokeapi.service2";
import {StockService} from "../../core/StockService";

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  posts : any;


  constructor(private service: StockService) {
  }
  //chartObject : DateToValue[] = data.chart;
  //dateLabels: string[] = this.chartObject.map(object => object.date);

  // portfolioValue : number[] = this.chartObject.map(object=>parseFloat(object.portfolioValue));
  dateLabels : any ;
  portfolioValue: any ;


  ngOnInit(): void {
    this.dateLabels = []
    this.portfolioValue = []

    this.service.getChart()
      .then(response  => {

        this.posts = response;
        this.portfolioValue = this.posts.chart.map((share: any) => parseFloat(share.sharePrice));
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
                  display: true,
                  text: 'Month'
                }
              },
              y: {
                stacked: true,
                title: {
                  display: true,
                  text: 'Value'
                }
              }
            }
          }




        });




      });





  }



}
