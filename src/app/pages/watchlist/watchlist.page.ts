import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StockinfoService } from 'src/app/services/stockinfo.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {

  results: Observable<any>;
  data = null;
  searchTerm: string = '';

  constructor(public platform: Platform,
    private stockService: StockinfoService) { }

  homepage = "watchlist";
  timeline = "oneDay";

  ngOnInit() {
  }

  searchChanged() {
    this.stockService.searchStock(this.searchTerm).subscribe(result => { this.data = result });
    console.log(this.searchTerm);
  }
  searchChange() {
    this.results = this.stockService.searchPrice(this.searchTerm);
    console.log(this.results)
    console.log(this.stockService)
    console.log(this.stockService.searchPrice)
    console.log(this.searchTerm)
  }
  
  public devWidth = this.platform.width();

}
