import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FilterComponent } from 'src/app/components/popover/filter/filter.component';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  priceone = '';
  pricetwo = '';
  price3 = '';
  Negpriceone = '';
  Negpricetwo = '';
  Negprice3 = '';
  producttwo: any = [];
  productone: any = [];
  productthree: any = [];
  negproductone: any = [];
  negproducttwo: any = [];
  negproductthree: any = [];


  timeline = "oneDay";
  goodBad = "good";

  constructor(public popoverController: PopoverController,
    private http: HttpClient, private loader: LoaderService) {
  }

  getStockOne() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=tsla&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.productone = data;
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
        this.producttwo = data;
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
        this.productthree = data;
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
        this.negproductone = data;
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
        this.negproducttwo = data;
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
        this.negproductthree = data;
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

  async filterPopup(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterComponent,
      cssClass: 'tested',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  loading() {
    this.loader.presentLoadingWithOptions()
  }


}


