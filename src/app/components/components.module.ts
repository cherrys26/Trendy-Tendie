import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PopoverComponent } from './popover/stock-crypto-filter/popover.component';
import { AlertsComponent } from './popover/alerts-filter/alerts.component';


@NgModule({
  declarations: [LogoComponent, TimelineComponent, PopoverComponent, AlertsComponent],
  exports: [LogoComponent, TimelineComponent, PopoverComponent, AlertsComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
