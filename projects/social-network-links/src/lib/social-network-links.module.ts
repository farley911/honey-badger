import { NgModule } from '@angular/core';
import { SocialNetworkLogoModule } from '@farley911/social-network-logo';

import { SocialNetworkLinksComponent } from './social-network-links.component';

@NgModule({
  declarations: [
    SocialNetworkLinksComponent
  ],
  imports: [
    SocialNetworkLogoModule
  ],
  exports: [
    SocialNetworkLinksComponent
  ]
})
export class SocialNetworkLinksModule { }
