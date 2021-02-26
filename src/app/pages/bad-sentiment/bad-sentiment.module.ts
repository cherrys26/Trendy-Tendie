import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadSentimentPageRoutingModule } from './bad-sentiment-routing.module';

import { BadSentimentPage } from './bad-sentiment.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadSentimentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BadSentimentPage]
})
export class BadSentimentPageModule {}
