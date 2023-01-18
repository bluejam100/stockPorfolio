import {ChartObject} from "./ChartObject";
import {Transaction} from "./Transaction";

export interface Porfolio {

  porfolioValueNow : number;
  totalInvested: number;
  netProfit: number;
  // chart : ChartObject[];
  // table : Transaction[];
}
