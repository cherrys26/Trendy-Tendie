import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodSentimentPage } from './good-sentiment.page';

const routes: Routes = [
  {
    path: '',
    component: GoodSentimentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodSentimentPageRoutingModule {}
