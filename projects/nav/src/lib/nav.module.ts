import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
