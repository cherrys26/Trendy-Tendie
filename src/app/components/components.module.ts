import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UptrendComponent } from './uptrend/uptrend.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PopoverComponent } from './popover/stock-crypto-filter/popover.component';
import { AlertsComponent } from './popover/alerts-filter/alerts.component';


@NgModule({
  declarations: [LogoComponent, UptrendComponent, ChatSupportComponent, TimelineComponent, PopoverComponent, AlertsComponent],
  exports: [LogoComponent, UptrendComponent, ChatSupportComponent, TimelineComponent, PopoverComponent, AlertsComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
