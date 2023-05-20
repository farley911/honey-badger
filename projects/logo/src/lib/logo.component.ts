import { Component, Input } from '@angular/core';

@Component({
  selector: 'hb-logo',
  templateUrl: './logo.component.html',
  styleUrls: []
})
export class LogoComponent {
  /**
   * Href to use when the logo is clicked.
   * Defaults to "/"
   */
  @Input() href: string = '/';

  /**
   * Name displayed for the alt and tooltip text
   */
  @Input() logoAlt: string;

  /**
   * URL used for the logo.
   */
  @Input() logoUrl: string = "https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png";

  /**
  * Width used for the logo (aspect ratio will be maintained).
  */
  @Input() logoWidth: string;
}
