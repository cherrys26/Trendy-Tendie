import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-good-sentiment',
  templateUrl: './good-sentiment.page.html',
  styleUrls: ['./good-sentiment.page.scss'],
})
export class GoodSentimentPage implements OnInit {

  //Data
  chartData: ChartDataSets[] = [
    { data: [], label: 'AAPL' },
    { data: [50, 60, 70, 80, 90, 100, 120, 130, 40, 80], label: 'Test' },
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
      borderColor: '#000000',
    }
  ];

  chartType = 'line';
  showLegend = false;

  //for Search on chart
  stock = 'AAPL'

  segmentSelected = "Stocks";
  constructor(public platform: Platform,
    public navCtrl: NavController,
    private http: HttpClient,
    public screenOrientation: ScreenOrientation) {
    console.log(this.screenOrientation.type);
    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        console.log(this.screenOrientation.type);
      })
    };
    window.addEventListener("orientationchange", function () {
      console.log(screen.orientation.type); // e.g. portrait
    });
  }

  ngOnInit() {
    this.getData();
    console.log(this.screenOrientation.type);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    window.addEventListener("orientationchange", function () {
      console.log(screen.orientation.type); // e.g. portrait
    });
  }

  getData() {
    this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2020-03-12&to=2020-08-12&apikey=demo`)
      .subscribe(res => {
        console.log('Res: ', res);
        const history = res['historical'];

        this.chartData[0].data = [];

        this.chartLabels = [];

        for (let entry of history) {
          this.chartLabels.push(entry.date);
          this.chartData[0].data.push(entry['close']);
        }
        console.log('data:', this.chartData);
        console.log('data:', this.chartLabels);
      });
  }
  public devWidth = this.platform.width();

}
