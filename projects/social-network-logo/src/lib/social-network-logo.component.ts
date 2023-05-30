import { Component, Input } from '@angular/core';

import { SocialNetwork } from '../models/social-network.interface';

@Component({
  selector: 'hb-social-network-logo',
  templateUrl: 'social-network-logo.component.html',
  styleUrls: []
})
export class SocialNetworkLogoComponent {
  /**
   * Provides the social network that will be used for the logo
   */
  @Input({ required: true }) socialNetwork: SocialNetwork;

  /**
   * Specifies the width of the logo. Aspect ratio is locked to 1:1.
   */ 
  @Input() width: number = 35;
}
