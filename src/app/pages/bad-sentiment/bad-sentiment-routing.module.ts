import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BadSentimentPage } from './bad-sentiment.page';

const routes: Routes = [
  {
    path: '',
    component: BadSentimentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BadSentimentPageRoutingModule {}
