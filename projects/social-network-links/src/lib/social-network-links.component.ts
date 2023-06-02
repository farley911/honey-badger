import { Component, Input } from '@angular/core';

import { SocialNetworkLink } from '../models/social-network-link.interface';

@Component({
  selector: 'hb-social-network-links',
  templateUrl: 'social-network-links.component.html',
  styleUrls: [ ]
})
export class SocialNetworkLinksComponent {
  @Input() socialNetworks: SocialNetworkLink[] = [];
}
