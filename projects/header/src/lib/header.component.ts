import { Component, Input } from '@angular/core';

import { Layout } from '../consts/layout.enum';

@Component({
  selector: 'hb-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  /**
   * Href to use when the logo is clicked.
   * Defaults to "/".
   */
  @Input() href: string;

  /**
   * The layout for the component.
   */
  @Input() layout: Layout;

  /**
   * Name displayed for the alt text.
   */
  @Input() logoAlt: string;

  /**
   * URL used for the logo.
   */
  @Input() logoUrl: string;

  /**
   * Width used for the logo (aspect ratio will be maintained).
   */
  @Input() logoWidth: string;

  /**
   * Heading, most likely used for the clients name.
   */
  @Input() heading: string;

  /**
   * Optional subheading for clients with one.
   */
  @Input() subheading: string;

  /**
   * Used by the view to map the enum to the input value.
   */
  Layout: typeof Layout = Layout;
}
