import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { LogoComponent } from '@farley911/logo';
import { NavItem } from '@farley911/nav/models/nav-item.interface';

@Component({
  selector: 'hb-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent {
  @Input() navItems: NavItem[];
  @Input() logo: LogoComponent;
  @Input() socialNetworks: unknown;
}
