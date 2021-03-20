import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-n-three-year',
  templateUrl: './c-n-three-year.component.html',
  styleUrls: ['./c-n-three-year.component.scss'],
})
export class CNThreeYearComponent implements OnInit {

  changeTwo: any = '';
  nCryptoOne: any = [];
  nCryptoTwo: any = [];
  nCryptoThree: any = [];
  nCryptoFour: any = [];
  nCryptoFive: any = [];

  constructor(private http: HttpClient) {
  }

  getCrypto() {
    this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=044633c835474c720d369694b2ac93a5&interval=1d&per-page=100&page=7`)
      .subscribe(data => {


        this.nCryptoOne = data[94];
        this.changeTwo = this.nCryptoOne['1d'].price_change_pct * 100
        this.nCryptoTwo = data[99];
        this.nCryptoThree = data[98];
        this.nCryptoFour = data[97];
        this.nCryptoFive = data[95];

      })
  }

  ngOnInit() {
    this.getCrypto()
  }


}
