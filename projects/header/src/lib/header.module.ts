import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { LogoModule } from 'projects/logo/src/lib/logo.module';
import { NavModule } from 'projects/nav/src/lib/nav.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    LogoModule,
    NavModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
