import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoPageRoutingModule } from './crypto-routing.module';

import { CryptoPage } from './crypto.page';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoPageRoutingModule,
    ChartsModule,
  ],
  declarations: [CryptoPage]
})
export class CryptoPageModule {}
