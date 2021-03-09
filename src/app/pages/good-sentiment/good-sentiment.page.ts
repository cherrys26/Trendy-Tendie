import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';


@Component({
  selector: 'app-good-sentiment',
  templateUrl: './good-sentiment.page.html',
  styleUrls: ['./good-sentiment.page.scss'],
})
export class GoodSentimentPage implements OnInit {

  constructor(public popoverController: PopoverController) {
  }

  timeline = "oneDay";
  goodBad = "good";

  ngOnInit() {

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'test',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
