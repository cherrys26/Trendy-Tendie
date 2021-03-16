import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {

  stock = "GME"

  constructor(public platform: Platform,
    private http: HttpClient,
    private modalController: ModalController,
  ) { }

  stockTitle: any[]
  stockSymbol: any[]
  stockClosePrice: any[]
  stockOpenPrice: any[]
  stockPrices: any[]

  ngOnInit() {
    this.dismissModal();
  }

  getData() {
    this.http.get(`https://finnhub.io/api/v1/search?q=${this.stock}&token=c1427on48v6s4a2e2mog`)
      .subscribe(res => {

        const result = res['result'];

        this.stockTitle = [];
        this.stockSymbol = [];

        for (let entry of result) {
          this.stockTitle.push(entry['description']);
          this.stockSymbol.push(entry.symbol);
        }
        console.log('data:', this.stockTitle);
        console.log('data:', this.stockSymbol);
      });
  }

  // Having multiple price lines is not possible with free api calls for now

  getPrice() {
    this.http.get(`https://finnhub.io/api/v1/quote?symbol=${this.stock}&token=c1427on48v6s4a2e2mog`)
      .subscribe(res => {
        this.stockClosePrice = []
        this.stockOpenPrice = []
        this.stockPrices = []

        this.stockClosePrice.push(res['c']);
        this.stockOpenPrice.push(res['o']);
        this.stockPrices.push(res);

        console.log('data: ', this.stockClosePrice);
        console.log('data: ', this.stockOpenPrice);
        console.log('data: ', this.stockPrices);

      });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}