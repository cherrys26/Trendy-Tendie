import { Component, OnInit } from '@angular/core';
import { StockinfoService } from 'src/app/services/stocks/stockinfo.service';

@Component({
  selector: 'app-s-p-all',
  templateUrl: './s-p-all.component.html',
  styleUrls: ['./s-p-all.component.scss'],
})
export class SPAllComponent implements OnInit {

  one: any = '';
  two: any = '';
  three: any = '';
  four: any = '';
  five: any = '';
  oneP = '';
  twoP = '';
  threeP = '';
  fourP = '';
  fiveP = '';

  constructor(private stockService: StockinfoService) { }

  stockData() {
    this.stockService.getStock('aapl').subscribe(stockOne => { this.one = stockOne });
    this.stockService.getStock('tsla').subscribe(stockTwo => { this.two = stockTwo });
    this.stockService.getStock('amzn').subscribe(stockThree => { this.three = stockThree });
    this.stockService.getStock('gme').subscribe(stockFour => { this.four = stockFour });
    this.stockService.getStock('ea').subscribe(stockFive => { this.five = stockFive });
  }

  stockPrice() {
    this.stockService.getPrice('aapl').subscribe(stockOne => { this.oneP = stockOne });
    this.stockService.getPrice('tsla').subscribe(stockTwo => { this.twoP = stockTwo });
    this.stockService.getPrice('amzn').subscribe(stockThree => { this.threeP = stockThree });
    this.stockService.getPrice('gme').subscribe(stockFour => { this.fourP = stockFour });
    this.stockService.getPrice('ea').subscribe(stockFive => { this.fiveP = stockFive });

  }


  ngOnInit() {
    this.stockData()
    this.stockPrice()
  }

}
