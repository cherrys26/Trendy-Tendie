import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LogoutComponent } from './logout/logout.component'
import { UptrendComponent } from './uptrend/uptrend.component';


@NgModule({
  declarations: [LogoComponent, LogoutComponent, UptrendComponent],
  exports: [LogoComponent, LogoutComponent, UptrendComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
