import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-c-p-one-week',
  templateUrl: './c-p-one-week.component.html',
  styleUrls: ['./c-p-one-week.component.scss'],
})
export class CPOneWeekComponent implements OnInit {

  pCryptoOne: any = [];
  changeOne: any = '';
  pCryptoTwo: any = [];
  pCryptoThree: any = [];
  pCryptoFour: any = [];
  pCryptoFive: any = [];


  constructor(private http: HttpClient) {
  }

  getCrypto() {
    this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=044633c835474c720d369694b2ac93a5&interval=1d&per-page=100&page=2`)
      .subscribe(data => {
        this.pCryptoOne = data[0];
        this.changeOne = this.pCryptoOne['1d'].price_change_pct * 100
        this.pCryptoTwo = data[1];
        this.pCryptoThree = data[3];
        this.pCryptoFour = data[2];
        this.pCryptoFive = data[4];
      })
  }

  ngOnInit() {
    this.getCrypto()
  }

}
