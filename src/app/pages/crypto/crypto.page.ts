import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {

  pCryptoOne: any = [];
  changeOne: any = '';
  pCryptoTwo: any = [];
  changeTwo: any = '';
  pCryptoThree: any = [];
  pCryptoFour: any = [];
  pCryptoFive: any = [];
  nCryptoOne: any = [];
  nCryptoTwo: any = [];
  nCryptoThree: any = [];
  nCryptoFour: any = [];
  nCryptoFive: any = [];

  timeline = "oneDay";
  goodBad = "good";

  constructor(public popoverController: PopoverController,
    private http: HttpClient, private loader: LoaderService) {
  }

  getCrypto() {
    this.http.get(`https://api.nomics.com/v1/currencies/ticker?key=044633c835474c720d369694b2ac93a5&interval=1d&per-page=100&page=1`)
      .subscribe(data => {
        this.pCryptoOne = data[0];
        this.changeOne = this.pCryptoOne['1d'].price_change_pct * 100
        this.pCryptoTwo = data[1];
        this.pCryptoThree = data[3];
        this.pCryptoFour = data[2];
        this.pCryptoFive = data[4];

        this.nCryptoOne = data[94];
        this.changeTwo = this.nCryptoOne['1d'].price_change_pct * 100
        this.nCryptoTwo = data[99];
        this.nCryptoThree = data[98];
        this.nCryptoFour = data[97];
        this.nCryptoFive = data[95];

      })
  }

  ngOnInit() {
    this.getCrypto()
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

  loading() {
    this.loader.presentLoadingWithOptions()
  }

}
