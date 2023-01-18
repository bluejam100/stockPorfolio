import { Component } from '@angular/core';
import {Porfolio} from "./Porfolio";
import {StockService} from "./core/stockService";
import {ChartObject} from "./ChartObject";
import {Transaction} from "./Transaction";

@Component({
  selector: 'app-root',
  templateUrl: '../../../StockChart/src/app/app.component.html',
  styleUrls: ['../../../StockChart/src/app/app.component.css']
})
export class AppComponent {
  title = 'untitled';


}
