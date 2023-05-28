import { NgModule } from '@angular/core';
import { NavModule } from '@farley911/nav';
import { HeaderModule } from '@farley911/header';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    HeaderModule,
    NavModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
