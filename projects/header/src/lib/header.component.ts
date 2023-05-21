import { Component, Input } from '@angular/core';
import { NavItem } from '@farley911/nav/models/nav-item.interface';
import { Layout as NavLayout } from '@farley911/nav/consts/layout.enum';

import { Layout } from '../consts/layout.enum';

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
  @Input() layout: Layout = Layout.inline;

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
   */
  @Input() logoWidth = '';
  
  /**
   * NavItems tems to display to the user.
   */
  @Input() navItems: NavItem[] = [];
  
  /**
   * Used by the nav to orient itself.
   */
  @Input() navLayout: NavLayout = NavLayout.inline;

  /**
   * Optional subheading for clients with one.
   */
  @Input() subheading = '';

  /**
   * Used by the view to map the enum to the input value.
   */
  Layout: typeof Layout = Layout;

  /**
   * Used by the nav to orient itself.
   */
  NavLayout: typeof NavLayout = NavLayout;
}
