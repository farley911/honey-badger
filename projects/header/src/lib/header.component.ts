import { Component, Input } from '@angular/core';

import { Layout } from '../consts/layout.enum';

@Component({
  selector: 'slt-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  /**
   * The layout for the component
   */
  @Input() layout: Layout;

  /**
   * URL used for the logo
   */
  @Input() logoUrl: string;

  /**
   * Width used for the logo (aspect ratio will be maintained)
   */
  @Input() logoWidth: string;
  @Input() heading: string;
  @Input() subheading: string;

  Layout: typeof Layout = Layout;
}
