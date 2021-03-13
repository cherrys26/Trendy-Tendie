import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StockinfoService } from 'src/app/services/stockinfo.service';
import { PopoverComponent } from '../../components/popover/stock-crypto-filter/popover.component';


@Component({
  selector: 'app-good-sentiment',
  templateUrl: './good-sentiment.page.html',
  styleUrls: ['./good-sentiment.page.scss'],
})
export class GoodSentimentPage implements OnInit {

  results: Observable<any>;
  data = null;
  searchTerm: string = '';

  constructor(public popoverController: PopoverController,
    private stockService: StockinfoService,
    private router: Router) {
  }

  timeline = "oneDay";
  goodBad = "good";

  ngOnInit() {
    console.log(this.stockService.stockName);

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

  // searchChanged() {
  //   this.stockService.stockOne().subscribe(result => {
  //     this.data = result;
  //   });
  //   console.log(this.stockService);
  //   console.log(this.stockService.stockOne());
  //   console.log(this.stockService);
  // }


  searchChange() {
    this.results = this.stockService.searchPrice(this.searchTerm);
    console.log(this.results)
    console.log(this.stockService)
    console.log(this.stockService.searchPrice)
    console.log(this.searchTerm)
  }

  navigate() {
    this.router.navigate(['charts'])
  }


}
