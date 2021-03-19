import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-u-one',
  templateUrl: './s-u-one.component.html',
  styleUrls: ['./s-u-one.component.scss'],
})
export class SUOneComponent implements OnInit {

  priceone = '';
  pricetwo = '';
  price3 = '';
  producttwo: any = [];
  productone: any = [];
  productthree: any = [];


  timeline = "oneDay";
  goodBad = "good";

  constructor(
    private http: HttpClient) {
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


  ngOnInit() {
    this.getStockOne()
    this.getPriceOne()
    this.getStocktwo()
    this.getPricetwo()
    this.getStock3()
    this.getPrice3()
  }
}
