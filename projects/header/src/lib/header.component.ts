import { Component, Input } from '@angular/core';
import { LAYOUT as NAV_LAYOUT } from '@farley911/nav';
import { NavItem } from '@farley911/nav/models/nav-item.interface';

@Component({
  selector: 'hb-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  /**
   * Heading, most likely used for the clients name.
   */
  @Input() heading = '';

  /**
   * Href to use when the logo is clicked.
   * Defaults to "/".
   */
  @Input() href = '';

  /**
   * The layout for the component.
   */
  @Input() layout: number = 1;

  /**
   * Name displayed for the alt text.
   */
  @Input() logoAlt = '';

  /**
   * URL used for the logo.
   */
  @Input() logoUrl = '';

  /**
   * Width used for the logo (aspect ratio will be maintained).
   * Default is 75px
   */
  @Input() logoWidth = 75;
  
  /**
   * NavItems tems to display to the user.
   */
  @Input() navItems: NavItem[] = [];
  
  /**
   * Used by the nav to orient itself.
   */
  @Input() navLayout: NAV_LAYOUT = NAV_LAYOUT.inline;

  /**
   * Optional subheading for clients with one.
   */
  @Input() subheading = '';

  /**
   * Used by the nav to orient itself.
   */
  NavLayout: typeof NAV_LAYOUT = NAV_LAYOUT;
}
