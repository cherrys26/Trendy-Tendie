import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadSentimentPageRoutingModule } from './bad-sentiment-routing.module';

import { BadSentimentPage } from './bad-sentiment.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadSentimentPageRoutingModule,
    ComponentsModule,
    ChartsModule,
  ],
  declarations: [BadSentimentPage]
})
export class BadSentimentPageModule { }
