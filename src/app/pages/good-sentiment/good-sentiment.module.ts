import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodSentimentPageRoutingModule } from './good-sentiment-routing.module';

import { GoodSentimentPage } from './good-sentiment.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodSentimentPageRoutingModule,
    ComponentsModule,
    ChartsModule,
  ],
  declarations: [GoodSentimentPage]
})
export class GoodSentimentPageModule { }
