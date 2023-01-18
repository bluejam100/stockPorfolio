import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Chart} from "chart.js";



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Amazon', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Apple', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Google', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Meta', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Netflix', weight: 10.811, symbol: 'B'},
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},

];



@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PorfolioComponent {
  displayedColumns: string[] = ['position', 'name', 'share', 'type', 'date'];
  dataSource = ELEMENT_DATA;


  }




