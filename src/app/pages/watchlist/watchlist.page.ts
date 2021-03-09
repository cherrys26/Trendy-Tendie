import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.page.html',
  styleUrls: ['./watchlist.page.scss'],
})
export class WatchlistPage implements OnInit {

  constructor(public platform: Platform) { }

  homepage = "watchlist";
  timeline = "oneDay";

  ngOnInit() {
  }

  public devWidth = this.platform.width();

}
