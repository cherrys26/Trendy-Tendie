import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s-d-one',
  templateUrl: './s-d-one.component.html',
  styleUrls: ['./s-d-one.component.scss'],
})
export class SDOneComponent implements OnInit {

  Negpriceone = '';

  Negpricetwo = '';

  Negprice3 = '';

  negproductone: any = [];

  negproducttwo: any = [];

  negproductthree: any = [];

  constructor(
    private http: HttpClient,) {
  }

  ngOnInit() {
    this.getNegStockOne()

    this.getNegPriceOne()

    this.getNegStocktwo()

    this.getNegPricetwo()

    this.getNegStock3()

    this.getNegPrice3()
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



}
