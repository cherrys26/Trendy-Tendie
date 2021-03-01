import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'

@Component({
  selector: 'app-bad-sentiment',
  templateUrl: './bad-sentiment.page.html',
  styleUrls: ['./bad-sentiment.page.scss'],
})
export class BadSentimentPage implements OnInit {

  chartData: ChartDataSets[] = [
    { data: [], label: 'AAPL' },
    { data: [100, 120, 130, 90, 80, 100], label: 'Test' },
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

  selectedSegment = "stocks";
  stockTime = "oneDay";

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
    }
  }

  ngOnInit() {
    this.getData();
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
