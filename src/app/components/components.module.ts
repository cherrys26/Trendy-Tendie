import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UptrendComponent } from './uptrend/uptrend.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PopoverComponent } from './popover/popover.component';


@NgModule({
  declarations: [LogoComponent, UptrendComponent, ChatSupportComponent, TimelineComponent, PopoverComponent],
  exports: [LogoComponent, UptrendComponent, ChatSupportComponent, TimelineComponent, PopoverComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
