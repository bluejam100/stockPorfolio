import { Component } from '@angular/core';
import {Chart, registerables } from 'chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {


  ngOnInit(): void {


    var pieChart = new Chart("pieChart", {
      type: 'doughnut',
      data: {
        labels: ['Apple', 'Amazon', 'Netflix', 'Others'],
        datasets: [{
          label: '# of Stocks',
          data: [32, 19, 3, 5],
          backgroundColor: [
            'rgba(202, 210, 197,0.8)',
            'rgba(132, 169, 140,0.8)',
            'rgba(82, 121, 111,0.8)',
            'rgba(53, 79, 82,0.8)'
          ],
          borderColor: [
            'rgb(202, 210, 197, 1)',
            'rgba(132, 169, 140, 1)',
            'rgba(82, 121, 111, 1)',
            'rgba(53, 79, 82, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        //cutoutPercentage: 40,
        responsive: false,

      }
    });


  }

}
