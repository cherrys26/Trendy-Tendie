import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  nameone = '';
  tickerone = '';
  priceone = '';
  nametwo = '';
  tickertwo = '';
  pricetwo = '';
  name3 = '';
  ticker3 = '';
  price3 = '';
  Negnameone = '';
  Negtickerone = '';
  Negpriceone = '';
  Negnametwo = '';
  Negtickertwo = '';
  Negpricetwo = '';
  Negname3 = '';
  Negticker3 = '';
  Negprice3 = '';
  product: any = [];

  timeline = "oneDay";
  goodBad = "good";

  constructor(public popoverController: PopoverController,
    private http: HttpClient, private loader: LoaderService) {
  }

  getStockOne() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=tsla&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.nameone = data['name'];
        this.tickerone = data['ticker'];
      })
  }
  getPriceOne() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=tsla&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.priceone = pdata['c'][0];

      })
  }
  getStocktwo() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=amzn&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.nametwo = data['name'];
        this.tickertwo = data['ticker'];
      })
  }
  getPricetwo() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=amzn&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.pricetwo = pdata['c'][0];

      })
  }
  getStock3() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=gme&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.name3 = data['name'];
        this.ticker3 = data['ticker'];
      })
  }
  getPrice3() {
    this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=gme&resolution=D&from=1615352400&to=2000000000&token=c1427on48v6s4a2e2mog`)
      .subscribe(pdata => {
        this.price3 = pdata['c'][0];

      })
  }

  getNegStockOne() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=amc&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.Negnameone = data['name'];
        this.Negtickerone = data['ticker'];
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
    this.getStockOne()
    this.getPriceOne()
    this.getStocktwo()
    this.getPricetwo()
    this.getStock3()
    this.getPrice3()
    this.getNegStockOne()
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



