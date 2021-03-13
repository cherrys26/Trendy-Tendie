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

  visible = true;
  toggle() {
    this.visible = !this.visible;
  }

  results: Observable<any>;
  data = null;
  searchTerm: string = '';
  finalsearchproduct: string;


  constructor(public platform: Platform,
    private stockService: StockinfoService) { }

  homepage = "watchlist";
  timeline = "oneDay";

  ngOnInit() {
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
