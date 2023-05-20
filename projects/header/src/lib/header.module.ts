import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { LogoModule } from 'projects/logo/src/lib/logo.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
