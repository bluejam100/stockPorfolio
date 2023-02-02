

export interface DateToValue {
 date: string;
 portfolioValue: number;

}

export interface Transaction  {
  id: number;
  type: string;
  name: string;
  share: number;
  price: string;
  date: string;
}

export interface Serial {
  portfolioValueNow: string;
  totalInvested: string;
  netProfit: string;
  chart: DateToValue[];
  table: Transaction[];
  donutChart : Donut[];
}

export interface Donut  {
  shareName: string;
  numberOfShare: number;

}



let data: Serial = {
  "portfolioValueNow" : "70000",
  "totalInvested" : "12000",
  "netProfit" : "16000",

  "chart": [
  {
    "date": "2023-01-28",
    "portfolioValue": 16000
  },
  {
    "date": "2023-07-22",
    "portfolioValue": 16000
  },
  {
    "date": "2022-02-16",
    "portfolioValue": 16000
  },
    {
      "date": "2022-08-26",
      "portfolioValue": 16000
    },
    {
      "date": "2022-07-29",
      "portfolioValue": 16000
    },
    {
      "date": "2022-07-29",
      "portfolioValue": 16000
    },
],

  "table":[{
  "id": 1,
  "type": "Buy",
  "name": "Amazon",
  "share": 40,
  "price": "23",
  "date": "2023-01-25"
},
  {
    "id": 2,
    "type": "Sell",
    "name": "Amazon",
    "share": 23,
    "price": "25",
    "date": "2023-06-15"
  },
  {
    "id": 3,
    "type": "Buy",
    "name": "Apple",
    "share": 35,
    "price": "100",
    "date": "2023-08-30"
  },
  {
    "id": 4,
    "type": "Buy",
    "name": "Google",
    "share": 50,
    "price": "12",
    "date": "2023-02-27"
  },
    {
      "id": 1,
      "type": "Buy",
      "name": "Amazon",
      "share": 40,
      "price": "23",
      "date": "2023-01-25"
    },
    {
      "id": 2,
      "type": "Sell",
      "name": "Amazon",
      "share": 23,
      "price": "25",
      "date": "2023-06-15"
    },
    {
      "id": 3,
      "type": "Buy",
      "name": "Apple",
      "share": 35,
      "price": "100",
      "date": "2023-08-30"
    },
    {
      "id": 4,
      "type": "Buy",
      "name": "Google",
      "share": 50,
      "price": "12",
      "date": "2023-02-27"
    }


  ],

  "donutChart" : [
    {
      "shareName": "Apple",
      "numberOfShare": 1
    },
    {
      "shareName": "Amazon",
      "numberOfShare": 2
    }


  ]
}

export default data;


