import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PopoverComponent } from './popover/stock-crypto-filter/popover.component';
import { AlertsComponent } from './popover/alerts-filter/alerts.component';
import { CUOneComponent } from './crypto/uptrend/c-u-one/c-u-one.component';
import { SUOneComponent } from './stocks/uptrend/s-u-one/s-u-one.component';
import { SDOneComponent } from './stocks/downtrend/s-d-one/s-d-one.component';

const routes: Routes = [
  { path: 'stocks/:ticker', loadChildren: () => import('../pages/charts/stocks-chart/charts.module').then(m => m.ChartsPageModule) },
  { path: 'crypto/:id', loadChildren: () => import('../pages/charts/crypto-chart/crypto.module').then(m => m.CryptoPageModule) }
];


@NgModule({
  declarations: [LogoComponent, TimelineComponent, PopoverComponent, AlertsComponent, CUOneComponent, SDOneComponent, SUOneComponent],
  exports: [LogoComponent, TimelineComponent, PopoverComponent, AlertsComponent, CUOneComponent, SDOneComponent, SUOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModule { }
