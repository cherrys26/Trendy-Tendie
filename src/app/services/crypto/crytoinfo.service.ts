import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrytoinfoService {

  urlName = 'https://finnhub.io/api/v1/stock/profile2';
  urlPrice = 'https://finnhub.io/api/v1/stock/candle';

  product: any = []
  name = []
  ticker = []

  startDate = '1615093200';
  endDate = '1615179600';

  stockName: "AAPL"

  apiKey = '044633c835474c720d369694b2ac93a5';
  constructor(private http: HttpClient) { }

  searchCrypto() {
    return this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&interval=1d`)
  }
  searchCryptoPrice() {
    return this.http.get(`https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=1572651390&to=1575243390&token=c1427on48v6s4a2e2mog`)
  }

  searchPrice() {
    return this.http.get
      (`${this.urlPrice}?symbol=aapl&resolution=D&from=${this.startDate}&to=${this.endDate}&token=${this.apiKey}`)
      .pipe(
        map(results => results['c']
        )

      );
  }


}


