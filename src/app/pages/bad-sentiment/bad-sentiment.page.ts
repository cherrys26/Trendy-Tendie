import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';

@Component({
  selector: 'app-bad-sentiment',
  templateUrl: './bad-sentiment.page.html',
  styleUrls: ['./bad-sentiment.page.scss'],
})
export class BadSentimentPage implements OnInit {

  name = '';
  ticker = '';
  price: any = [];
  product: any = [];

  timeline = "oneDay";
  goodBad = "good";

  constructor(public popoverController: PopoverController,
    private http: HttpClient) {
  }

  getStock() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=tsla&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.name = data['name'];
        this.ticker = data['ticker'];
      })
  }
  getPrice() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=tsla&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.price = pdata['c'][0];

      })
  }

  ngOnInit() {
    this.getStock()
    this.getPrice()
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'test',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
