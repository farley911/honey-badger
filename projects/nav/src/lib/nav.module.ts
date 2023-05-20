import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    MatButtonModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
