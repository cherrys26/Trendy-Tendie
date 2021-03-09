import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UptrendComponent } from './uptrend/uptrend.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [LogoComponent, UptrendComponent, ChatSupportComponent, TimelineComponent],
  exports: [LogoComponent, UptrendComponent, ChatSupportComponent, TimelineComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
