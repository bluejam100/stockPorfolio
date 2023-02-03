import { Component } from '@angular/core';
import {Chart, registerables } from 'chart.js'
import {StockService} from "../../core/StockService";
Chart.register(...registerables);
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  constructor(private service: StockService) {
  }

  posts: any;
  donutLabelsValue: any;
  shareNumberValue: any;

  ngOnInit(): void {

    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        this.donutLabelsValue = this.posts.donutChart.map((donut: any) => donut.shareName);
        this.shareNumberValue = this.posts.donutChart.map((donut: any) => donut.numberOfShare);


        var pieChart = new Chart("pieChart", {
          type: 'doughnut',
          data: {
            labels: this.donutLabelsValue,
            datasets: [{
              label: '# of Stocks',
              data: this.shareNumberValue,
              backgroundColor: [
                'rgba(53, 79, 82,0.8)',
                'rgba(82, 121, 111,0.8)',
                'rgba(132, 169, 140,0.8)',
                'rgba(202, 210, 197,0.8)'
              ],
              borderColor: [
                'rgba(53, 79, 82, 1)',
                'rgba(82, 121, 111, 1)',
                'rgba(132, 169, 140, 1)',
                'rgb(202, 210, 197, 1)'

              ],
              borderWidth: 1
            }]
          },
          options: {

            responsive: false,

            plugins: {
              legend: {
                labels: {
                  // This more specific font property overrides the global property
                  font: {
                    size: 14
                  }
                }
              }
            }
          }

        });


      })

  }
}
