import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { StockinfoService } from 'src/app/services/stockinfo.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {

  visible = true;
  toggle() {
    this.visible = !this.visible;
  }

  results: Observable<any>;
  data = null;
  testData: any = [];
  product: any = [];
  twoData = null;
  searchTerm: string = '';
  finalsearchproduct: string;


  constructor(public platform: Platform,
    private stockService: StockinfoService, private loader: LoaderService) { }

  homepage = "watchlist";
  timeline = "oneDay";

  ngOnInit() {
    this.getStockOne();
    this.loading();
  }

  HasSearch: boolean;
  hasSearchnot(e) {
    console.log("hasearch searchbar", this.HasSearch);

    if (e.target.classList.contains('myicon22')) {
      this.finalsearchproduct = " ";
      this.HasSearch = !this.HasSearch;

    }
  }
  hideSearchbar(e) {
    if (!e.target.classList.contains('myicon22')) {

      if (this.HasSearch == true) {
        this.HasSearch = false;
        this.finalsearchproduct = " ";
      }
    }
  }
  searchChanged() {
    this.stockService.searchStock(this.searchTerm).subscribe(result => { this.data = result });

  }

  getStockOne() {
    this.stockService.StockOne().subscribe(res => {
      this.product = res;
      console.log(res)
    });
  }

  getStockTwo() {
    this.stockService.StockTwo().subscribe(test => { this.twoData = console.log(test) })
  }

  searchChange() {
    this.stockService.searchPrice(this.searchTerm).subscribe(price => { this.testData = console.log(price[0]) });

  }

  loading() {
    this.loader.presentLoadingWithOptions()
  }

  public devWidth = this.platform.width();

}
