import { Component, Input } from '@angular/core';

import { Layout } from '../consts/layout.enum';

@Component({
  selector: 'hb-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  /**
   * The layout for the component.
   */
  @Input() layout: Layout;

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
   * Used by the view to map the enum to the input value
   */
  Layout: typeof Layout = Layout;
}
