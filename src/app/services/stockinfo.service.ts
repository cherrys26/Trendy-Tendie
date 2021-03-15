import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  startDate = '1615352400';
  endDate = '1615438800';

  stockName: "AAPL"

  apiKey = 'c1427on48v6s4a2e2mog';
  constructor(private http: HttpClient) { }

  searchStock(ticker: string) {
    return this.http.get(`${this.urlName}?symbol=${encodeURI(ticker)}&token=${this.apiKey}`)
  }

  getStock() {
    this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=tsla&token=c1427on48v6s4a2e2mog`)
      .subscribe(data => {
        this.product = data;

        this.name = data['name'];
        this.ticker = data['ticker'];
      })
  }


  searchPrice(ticker: string): Observable<any> {
    return this.http.get
      (`${this.urlPrice}?symbol=${encodeURI(ticker)}&resolution=D&from=${this.startDate}&to=${this.endDate}&token=${this.apiKey}`)
      .pipe(
        map(results => results['c'])
      );
  }


}