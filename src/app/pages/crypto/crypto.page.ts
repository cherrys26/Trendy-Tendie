import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {

  cryptoTickerOne = '';
  cryptorNameOne = '';
  Negpriceone = '';
  Negnametwo = '';
  Negtickertwo = '';
  Negpricetwo = '';
  Negname3 = '';
  Negticker3 = '';
  Negprice3 = '';

  product: any = [];
  productOne: any = [];

  timeline = "oneDay";
  goodBad = "good";

  constructor(public popoverController: PopoverController,
    private http: HttpClient, private loader: LoaderService) {
  }

  getPositiveCrytoOne() {
    this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=044633c835474c720d369694b2ac93a5&ids=BTC&interval=1d&per-page=100&page=1`)
      .subscribe(data => {
        this.productOne = data[0];
      })
  }
  getNegPriceOne() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=amc&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.Negpriceone = pdata['c'][0];

      })
  }
  getNegStocktwo() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=mu&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.Negnametwo = data['name'];
        this.Negtickertwo = data['ticker'];
      })
  }
  getNegPricetwo() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=mu&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.Negpricetwo = pdata['c'][0];

      })
  }
  getNegStock3() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=chwy&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.Negname3 = data['name'];
        this.Negticker3 = data['ticker'];
      })
  }
  getNegPrice3() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=chwy&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.Negprice3 = pdata['c'][0];

      })
  }

  ngOnInit() {
    this.getPositiveCrytoOne()
    this.getNegPriceOne()
    this.getNegStocktwo()
    this.getNegPricetwo()
    this.getNegStock3()
    this.getNegPrice3()
    this.loading()
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

  loading() {
    this.loader.presentLoadingWithOptions()
  }

}
