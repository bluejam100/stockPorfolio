

export interface DateToValue {
 date: string;
 porfolioValue: number;

}

export interface Transaction  {
  id: number;
  type: string;
  name: string;
  share: number;
  price: number;
  date: string;
}

export interface serial  {
  porfolioValueNow: number;
  totalInvested: number;
  netProfit: number;
  chart: DateToValue[];
  table: Transaction[]
}



let data: serial = {
  "porfolioValueNow" : 70000,
  "totalInvested" : 12000,
  "netProfit" : 16000,

  "chart": [
  {
    "date": "2023-01-28",
    "porfolioValue": 54000
  },
  {
    "date": "2023-07-22",
    "porfolioValue": 44000
  },
  {
    "date": "2022-02-16",
    "porfolioValue": 64000
  },
    {
      "date": "2022-08-26",
      "porfolioValue": 34000
    },
    {
      "date": "2022-07-29",
      "porfolioValue": 32000
    },
    {
      "date": "2022-07-29",
      "porfolioValue": 32000
    },
],

  "table":[{
  "id": 1,
  "type": "Buy",
  "name": "Amazon",
  "share": 40,
  "price": 23,
  "date": "2023-01-25"
},
  {
    "id": 2,
    "type": "Sell",
    "name": "Amazon",
    "share": 23,
    "price": 25,
    "date": "2023-06-15"
  },
  {
    "id": 3,
    "type": "Buy",
    "name": "Apple",
    "share": 35,
    "price": 100,
    "date": "2023-08-30"
  },
  {
    "id": 4,
    "type": "Buy",
    "name": "Google",
    "share": 50,
    "price": 12,
    "date": "2023-02-27"
  },
    {
      "id": 1,
      "type": "Buy",
      "name": "Amazon",
      "share": 40,
      "price": 23,
      "date": "2023-01-25"
    },
    {
      "id": 2,
      "type": "Sell",
      "name": "Amazon",
      "share": 23,
      "price": 25,
      "date": "2023-06-15"
    },
    {
      "id": 3,
      "type": "Buy",
      "name": "Apple",
      "share": 35,
      "price": 100,
      "date": "2023-08-30"
    },
    {
      "id": 4,
      "type": "Buy",
      "name": "Google",
      "share": 50,
      "price": 12,
      "date": "2023-02-27"
    }


  ]
}

export default data;


