import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LogoutComponent } from './logout/logout.component'


@NgModule({
  declarations: [LogoComponent, LogoutComponent],
  exports: [LogoComponent, LogoutComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
