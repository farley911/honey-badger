import { NgModule } from '@angular/core';
import { LogoModule } from '@farley911/logo';
import { NavModule } from '@farley911/nav';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    NavModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
