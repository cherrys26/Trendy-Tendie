import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockinfoService {

  urlName = 'https://finnhub.io/api/v1/stock/profile2';
  urlPrice = 'https://finnhub.io/api/v1/stock/candle';

  product: any = []
  name = []
  ticker = []

  startDate = '1615093200';
  endDate = '1615179600';

  stockName: "AAPL"

  apiKey = 'c1427on48v6s4a2e2mog';
  constructor(private http: HttpClient) { }

  searchStock(ticker: string) {
    return this.http.get(`${this.urlName}?symbol=${encodeURI(ticker)}&token=${this.apiKey}`)
  }

  StockTwo() {
    return this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=aapl&token=c1427on48v6s4a2e2mog`)

  }

  searchPrice(ticker: string) {
    return this.http.get
      (`${this.urlPrice}?symbol=${ticker}&resolution=D&from=${this.startDate}&to=${this.endDate}&token=${this.apiKey}`)
      .pipe(
        map(results => results['c']
        )

      );
  }

  searchWatchlistPrice() {
    return this.http.get
      (`${this.urlPrice}?symbol=aapl&resolution=D&from=${this.startDate}&to=${this.endDate}&token=${this.apiKey}`)
      .pipe(
        map(results => results['c']
        )

      );
  }


}