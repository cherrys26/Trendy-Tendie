import { Component, OnInit } from '@angular/core';
import { StockinfoService } from 'src/app/services/stocks/stockinfo.service';

@Component({
  selector: 'app-all-s-d',
  templateUrl: './all-s-d.component.html',
  styleUrls: ['./all-s-d.component.scss'],
})
export class AllSDComponent implements OnInit {

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
    this.stockService.getStock('chwy').subscribe(stockOne => { this.one = stockOne });
    this.stockService.getStock('amc').subscribe(stockTwo => { this.two = stockTwo });
    this.stockService.getStock('ppl').subscribe(stockThree => { this.three = stockThree });
    this.stockService.getStock('snap').subscribe(stockFour => { this.four = stockFour });
    this.stockService.getStock('amd').subscribe(stockFive => { this.five = stockFive });
  }

  stockPrice() {
    this.stockService.getPrice('chwy').subscribe(stockOne => { this.oneP = stockOne });
    this.stockService.getPrice('amc').subscribe(stockTwo => { this.twoP = stockTwo });
    this.stockService.getPrice('ppl').subscribe(stockThree => { this.threeP = stockThree });
    this.stockService.getPrice('snap').subscribe(stockFour => { this.fourP = stockFour });
    this.stockService.getPrice('amd').subscribe(stockFive => { this.fiveP = stockFive });

  }


  ngOnInit() {
    this.stockData()
    this.stockPrice()
  }

}
