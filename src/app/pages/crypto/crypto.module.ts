import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CryptoPageRoutingModule } from './crypto-routing.module';

import { CryptoPage } from './crypto.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CryptoPageRoutingModule,
    ComponentsModule,
    ChartsModule,

  ],
  declarations: [CryptoPage]
})
export class CryptoPageModule {}
