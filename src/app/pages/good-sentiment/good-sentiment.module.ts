import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodSentimentPageRoutingModule } from './good-sentiment-routing.module';

import { GoodSentimentPage } from './good-sentiment.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodSentimentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [GoodSentimentPage]
})
export class GoodSentimentPageModule { }
