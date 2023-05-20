import { Component, Input } from '@angular/core';

@Component({
  selector: 'hb-logo',
  templateUrl: './logo.component.html',
  styleUrls: []
})
export class LogoComponent {
  /**
   * Href to use when the logo is clicked.
   * Defaults to "/".
   */
  @Input() href = '/';

  /**
   * Name displayed for the alt and tooltip text.
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
}
