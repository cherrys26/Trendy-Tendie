import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.page.html',
  styleUrls: ['./charts.page.scss'],
})
export class ChartsPage implements OnInit {

  price: any = [];
  product: any = [];
  name = [];
  ticker = [];

  //Data
  chartData: ChartDataSets[] = [
    { data: [], label: window.location.href.substr(window.location.href.lastIndexOf('/') + 1), fill: false },
    { data: [10, 60, 70, 80, 90, 100, 20, 30, 40, 80, 15, 30, 45, 80, 40, 60, 50, 28, 50], label: 'Negative Sentiment', fill: false },
    { data: [90, 40, 30, 20, 10, 0, 80, 70, 60, 20, 85, 70, 55, 20, 60, 40, 50, 72, 50], label: 'Positive Sentiment', fill: false },
  ];
  chartLabels: Label[];

  //chart options

  chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'historical closing price'
    },
    pan: {
      enabled: true,
      mode: 'xy'
    },
    zoom: {
      enabled: true,
      mode: 'xy'
    }
  };

  chartColors: Color[] = [
    {
      borderColor: '#a6a6a6',
    },
    {
      borderColor: '#ff3333',
    },
    {
      borderColor: '#00ff00',
    }
  ];

  chartType = 'line';
  showLegend = false;

  //for Search on chart
  stock = 'AAPL'

  segmentSelected = "Stocks";
  stockTime = "oneDay";


  constructor(public platform: Platform,
    public navCtrl: NavController,
    private http: HttpClient,
    private modalCtrl: ModalController) {
  }


  ngOnInit() {
    this.getPrice(window.location.href.substr(window.location.href.lastIndexOf('/') + 1))
    this.getStock(window.location.href.substr(window.location.href.lastIndexOf('/') + 1))
  }

  getStock(ticker) {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        console.log(data);
        this.product = data;
        console.log(this.product)

        this.name = data['name'];
        this.ticker = data['ticker'];
        console.log(this.ticker);
        console.log(this.name);
        console.log(data['name']);
      })
  }


  getPrice(ticker) {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=${ticker}&resolution=D&from=1613365200&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        const time = pdata['t']
        const price = pdata['c']

        this.chartData[0].data = [];
        this.chartLabels = [];

        for (let test of time) {
          this.chartLabels.push(test)
          {
            for (let test2 of price) {
              this.chartData[0].data.push(test2);

            }
          }
        }

      })
  }

  back() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
