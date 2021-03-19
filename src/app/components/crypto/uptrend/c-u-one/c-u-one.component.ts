import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-u-one',
  templateUrl: './c-u-one.component.html',
  styleUrls: ['./c-u-one.component.scss'],
})
export class CUOneComponent implements OnInit {

  pCryptoOne: any = [];
  changeOne: any = '';

  constructor(private http: HttpClient) { }

  ngOnInit() { this.getCrypto() }

  getCrypto() {
    this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=044633c835474c720d369694b2ac93a5&interval=1d&per-page=100&page=1`)
      .subscribe(data => {
        this.pCryptoOne = data[0];
        this.changeOne = this.pCryptoOne['1d'].price_change_pct * 100
      })
  }

}
