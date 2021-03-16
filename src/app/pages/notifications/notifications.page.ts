import { Component, OnInit } from '@angular/core';
import { Platform, PopoverController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { AlertsComponent } from '../../components/popover/alerts-filter/alerts.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {


  constructor(public platform: Platform,
    private popoverController: PopoverController, private loader: LoaderService) { }

  alerts = "stocks";


  ngOnInit() {
    this.loading()
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
