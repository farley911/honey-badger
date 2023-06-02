import { Component, Input } from '@angular/core';

import { SocialNetworkLink } from '../models/social-network-link.interface';

@Component({
  selector: 'hb-social-network-links',
  templateUrl: 'social-network-links.component.html',
  styleUrls: ['social-network-links.component.scss']
})
export class SocialNetworkLinksComponent {
  /**
   * Provides the social networks to display links for
   */
  @Input({ required: true, }) socialNetworks: SocialNetworkLink[] = [];

  /**
   * Provides the width for the social network logos. Height is synced.
   * Default is 35px
   */
  @Input() logoWidth: number = 35;
}
