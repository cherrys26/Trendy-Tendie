import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UptrendComponent } from './uptrend/uptrend.component';
import { ChatSupportComponent } from './chat-support/chat-support.component';


@NgModule({
  declarations: [LogoComponent, UptrendComponent, ChatSupportComponent],
  exports: [LogoComponent, UptrendComponent, ChatSupportComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
