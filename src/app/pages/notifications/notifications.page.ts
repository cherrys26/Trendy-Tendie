import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, PopoverController } from '@ionic/angular';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { StockinfoService } from 'src/app/services/stockinfo.service';
import { Observable } from 'rxjs';
import { AlertsComponent } from '../../components/popover/alerts-filter/alerts.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  alerts = "stocks";
  alertSetting = "watchport";

  visible = true;
  toggle() {
    this.visible = !this.visible;
  }

  stock = "GME"
  // restProvider: any;
  finalsearchproduct: string;
  // searchproduct: any;

  results: Observable<any>;
  data = null;
  searchTerm: string = '';

  constructor(public platform: Platform,
    private http: HttpClient,
    // private modalController: ModalController,
    private stockService: StockinfoService,
    private popoverController: PopoverController) { }

  stockTitle: any;
  stockSymbol: any;
  stockClosePrice: any;
  stockOpenPrice: any;
  stockPrices: any;

  ngOnInit() {

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

  searchChanged() {
    this.stockService.searchStock(this.searchTerm).subscribe(result => { this.data = result });
    console.log(this.searchTerm);
  }
  searchChange() {
    this.results = this.stockService.searchPrice(this.searchTerm);
    console.log(this.results)
    console.log(this.stockService)
    console.log(this.stockService.searchPrice)
    console.log(this.searchTerm)
  }

  HasSearch: boolean;
  hasSearchnot(e) {
    console.log("hasearch searchbar", this.HasSearch);

    if (e.target.classList.contains('myicon22')) {
      this.finalsearchproduct = " ";
      this.HasSearch = !this.HasSearch;

    }
  }
  hideSearchbar(e) {
    if (!e.target.classList.contains('myicon22')) {

      if (this.HasSearch == true) {
        this.HasSearch = false;
        this.finalsearchproduct = " ";
      }
    }
  }

  getData() {
    return this.http.get(`https://finnhub.io/api/v1/stock/profile2?symbol=${this.stock}&token=c1427on48v6s4a2e2mog`)
      .subscribe(res => {

        this.stockTitle = [];
        this.stockSymbol = [];

        this.stockTitle.push(res['name']);
        this.stockSymbol.push(res['ticker']);

        console.log('data:', this.stockTitle);
        console.log('data:', this.stockSymbol);
      })


  }



  // getPrice() {
  //   return this.http.get(`https://finnhub.io/api/v1/stock/candle?symbol=${this.stock}&resolution=D&from=1614834000&to=1615006800&token=c1427on48v6s4a2e2mog`)
  //     .subscribe(res => {

  //       const close = res['c'];
  //       const open = res['o'];

  //       this.stockClosePrice = []
  //       this.stockOpenPrice = []

  //       for (let price of close) {
  //         this.stockClosePrice.push(price)
  //       }
  //       for (let test of open) {
  //         this.stockOpenPrice.push(test)
  //       }

  //       console.log('data: ', this.stockClosePrice);
  //       console.log('data: ', this.stockOpenPrice);

  //     });
  // }

  // async openSearch() {
  //   const modal = await this.modalController.create({
  //     component: SearchbarComponent,
  //     cssClass: 'class',
  //     swipeToClose: true
  //   });
  //   return await modal.present();
  // }

  public devWidth = this.platform.width();
}
