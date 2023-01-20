import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Chart} from "chart.js";
import data, {Transaction} from "../../Data";





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

const TRANSACTION_DATA: Transaction[] = data.table;


@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PorfolioComponent {
  displayedColumns: string[] = ['id', 'name', 'type','share', 'price', 'date'];
  dataSource = TRANSACTION_DATA;
  todayDate : Date = new Date(Date());
  formatTodayDate : string = this.todayDate.toDateString();
  porfolioValueNow : number = data.porfolioValueNow;
  totalInvested : number = data.totalInvested;
  netProfit : number = data.netProfit;

  }




