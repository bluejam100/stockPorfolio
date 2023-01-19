import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import data, {DateToValue} from "../../Data";
Chart.register(...registerables);
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {


  chartObject : DateToValue[] = data.chart;
  dateLabels: string[] = this.chartObject.map(object => object.date);

  porfolioValue : number[] = this.chartObject.map(object=>object.porfolioValue);



  ngOnInit(): void {

    for (let i = 0 ; i < this.dateLabels.length; i++){

      if (i==0 || i == (this.dateLabels.length)-1 ){
        this.dateLabels[i] = this.dateLabels[i] ;
      }
      else{this.dateLabels[i]= ""};
    }


    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.dateLabels,
        datasets: [{
          label: 'Porfolio Value',
          data: this.porfolioValue,
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

  }



}
