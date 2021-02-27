import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-good-sentiment',
  templateUrl: './good-sentiment.page.html',
  styleUrls: ['./good-sentiment.page.scss'],
})
export class GoodSentimentPage implements OnInit {

  segmentModel = "Stocks";

  constructor(public platform: Platform) { }

  ngOnInit() {
  }

  public devWidth = this.platform.width();

  segmentChanged(event) {
    console.log(this.segmentModel);

    console.log(event);
  }

}
