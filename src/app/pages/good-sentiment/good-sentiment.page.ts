import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-good-sentiment',
  templateUrl: './good-sentiment.page.html',
  styleUrls: ['./good-sentiment.page.scss'],
})
export class GoodSentimentPage implements OnInit {

  segmentSelected = "Stocks";


  constructor(public platform: Platform,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  public devWidth = this.platform.width();

}
