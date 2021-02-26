import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-bad-sentiment',
  templateUrl: './bad-sentiment.page.html',
  styleUrls: ['./bad-sentiment.page.scss'],
})
export class BadSentimentPage implements OnInit {

  constructor(public platform: Platform) { }

  ngOnInit() {
  }

  public devWidth = this.platform.width();
}
