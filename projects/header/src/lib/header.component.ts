import { Component, Input } from '@angular/core';

import { Layout } from '../consts/layout.enum';

@Component({
  selector: 'slt-header',
  templateUrl: 'header.component.html',
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  @Input() layout: Layout;
  @Input() logoUrl: string;
  @Input() logoWidth: string;
  @Input() heading: string;
  @Input() subheading: string;

  Layout: typeof Layout = Layout;
}
