import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StocksPageRoutingModule } from './stocks-routing.module';

import { StocksPage } from './stocks.page';
import { ComponentsModule } from '../../components/components.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StocksPageRoutingModule,
    ComponentsModule,
    ChartsModule,

  ],
  declarations: [StocksPage]
})
export class StocksPageModule {}