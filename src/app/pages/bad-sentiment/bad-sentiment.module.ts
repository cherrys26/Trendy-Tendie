import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadSentimentPageRoutingModule } from './bad-sentiment-routing.module';

import { BadSentimentPage } from './bad-sentiment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadSentimentPageRoutingModule
  ],
  declarations: [BadSentimentPage]
})
export class BadSentimentPageModule {}
