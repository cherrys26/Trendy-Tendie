import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {
  name = [];
  ticker = [];
  id = '';

  //Data
  chartData: ChartDataSets[] = [
    { data: [], label: window.location.href.substr(window.location.href.lastIndexOf('/') + 1), fill: false },
    { data: [10, 60, 70, 80, 90, 100, 20, 30, 40, 80, 15, 30, 45, 80, 40, 60, 50, 28, 50], label: 'Negative Sentiment', fill: false },
    { data: [90, 40, 30, 20, 10, 0, 80, 70, 60, 20, 85, 70, 55, 20, 60, 40, 50, 72, 50], label: 'Positive Sentiment', fill: false },
  ];
  chartLabels: Label[]

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
    private modalCtrl: ModalController,
    private loader: LoaderService) {
  }


  ngOnInit() {
    this.getCrypto(window.location.href.substr(window.location.href.lastIndexOf('/') + 1))
    this.loading()
  }

  getCrypto(ticker) {
    this.http.get(`https://api.nomics.com/v1/currencies/sparkline?key=044633c835474c720d369694b2ac93a5&ids=${ticker}&start=2020-11-14T00%3A00%3A00Z`)
      .subscribe(data => {
        let timestamps = data[0]['timestamps'];
        let prices = data[0]['prices'];
        this.id = data[0]['currency']
        console.log(prices);
        console.log(timestamps);
        console.log(this.id);

        this.chartData[0].data = [];
        this.chartLabels = [];

        for (let test of timestamps) {
          this.chartLabels.push(test)
          {
            for (let test2 of prices) {
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

  loading() {
    this.loader.presentLoadingWithOptions()
  }
}
