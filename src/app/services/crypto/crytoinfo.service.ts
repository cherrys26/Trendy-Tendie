import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrytoinfoService {

  urlPrice = 'https://finnhub.io/api/v1/stock/candle';

  product: any = []
  name = []
  ticker = []

  startDate = '1615093200';
  endDate = '1615179600';

  apiKey = '044633c835474c720d369694b2ac93a5';
  constructor(private http: HttpClient) { }

  searchCrypto(ticker: string) {
    return this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=044633c835474c720d369694b2ac93a5&ids=${ticker}&interval=1d&per-page=100&page=1`)
      .pipe(
        map(crypto => crypto[0])
      )
  }

  searchPrice(ticker: string) {
    return this.http.get
      (`${this.urlPrice}?symbol=${ticker}&resolution=D&from=${this.startDate}&to=${this.endDate}&token=${this.apiKey}`)
      .pipe(
        map(results => results['c']
        )

      );
  }


}


