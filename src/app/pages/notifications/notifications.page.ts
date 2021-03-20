import { Component, OnInit } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';
import { CrytoinfoService } from 'src/app/services/crypto/crytoinfo.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { StockinfoService } from 'src/app/services/stocks/stockinfo.service';
import { AlertsComponent } from '../../components/popover/alerts-filter/alerts.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  positive: any = ''
  negative: any = ''
  gainer: any = ''
  loser: any = ''

  constructor(public platform: Platform,
    private popoverController: PopoverController, private loader: LoaderService, 
    private stockService: StockinfoService,
    private cryptoService: CrytoinfoService,
    ) { }

  alerts = "stocks";


  ngOnInit() {
    this.loading()
    this.topGainer();
    this.topLoser();
    this.trendingNegative();
    this.trendingPositive();
  }

  trendingPositive() {
    this.stockService.getStock('amzn').subscribe(trendPositive => (this.positive = trendPositive))
  }
  trendingNegative() {
    this.stockService.getStock('gme').subscribe(trendNegative => (this.negative = trendNegative))

  }
  topGainer() {
    this.stockService.getStock('mu').subscribe(topGainers => (this.gainer = topGainers))

  }
  topLoser() {
    this.stockService.getStock('mlhr').subscribe(topLosers => (this.loser = topLosers))

  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AlertsComponent,
      cssClass: 'test',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  loading() {
    this.loader.presentLoadingWithOptions()
  }


}
