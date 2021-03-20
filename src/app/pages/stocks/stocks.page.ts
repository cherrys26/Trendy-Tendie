import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { FilterComponent } from 'src/app/components/popover/filter/filter.component';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.page.html',
  styleUrls: ['./stocks.page.scss'],
})
export class StocksPage implements OnInit {

  timeline = "oneDay";
  goodBad = "good";

  constructor(public popoverController: PopoverController,
    private loader: LoaderService) {
  }

  ngOnInit() {
    this.loading()
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

  async filterPopup(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterComponent,
      cssClass: 'tested',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  loading() {
    this.loader.presentLoadingWithOptions()
  }


}


