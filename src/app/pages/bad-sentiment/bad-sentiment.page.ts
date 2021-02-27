import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-bad-sentiment',
  templateUrl: './bad-sentiment.page.html',
  styleUrls: ['./bad-sentiment.page.scss'],
})
export class BadSentimentPage implements OnInit {

  selectedSegment = "Stocks"

  constructor(public platform: Platform,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  public devWidth = this.platform.width();

}
