import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LogoComponent } from '@farley911/logo';
import { NavItem } from '@farley911/nav/models/nav-item.interface';
import { SocialNetworkLink } from '@farley911/social-network-links/models/social-network-link.interface';

@Component({
  selector: 'hb-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  /**
   * Optional. Navigation items to display
   */
  @Input() navItems: NavItem[];

  /**
   * Optional. Logo to display
   */
  @Input() logo: LogoComponent;

  /**
   * Optional. Social network links(connections) to display
   */
  @Input() socialNetworks: SocialNetworkLink[];

  /**
   * Optional. Social network logo width. Height is 1:1.
   * Default: 35
   */
  @Input() socialNetworkLogoWidth = 35;
}
