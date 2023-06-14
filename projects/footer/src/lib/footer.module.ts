import { NgModule } from '@angular/core';
import { NavModule } from '@farley911/nav';
import { HeaderModule } from '@farley911/header';
import { CommonModule } from '@angular/common';
import { SocialNetworkLinksModule } from '@farley911/social-network-links';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    NavModule,
    SocialNetworkLinksModule,
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
