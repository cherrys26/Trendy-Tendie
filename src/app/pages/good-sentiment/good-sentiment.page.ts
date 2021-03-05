import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-good-sentiment',
  templateUrl: './good-sentiment.page.html',
  styleUrls: ['./good-sentiment.page.scss'],
})
export class GoodSentimentPage implements OnInit {

  constructor() {
  }

  timeline = "oneDay";
  goodBad = "good";

  ngOnInit() {

  }



}
