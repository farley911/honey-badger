import { Component, Input } from '@angular/core';

import { Layout } from '../consts/layout.enum';
import { NavItem } from '../models/nav-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'hb-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  /**
   * The nav can be either inline or vertical.
   */
  @Input() layout: Layout = Layout.inline;

  /**
   * Collection of NavItems
   */
  @Input() navItems: NavItem[] = [];

  /**
   * Used by the view to map the enum to the input value.
   */
  Layout: typeof Layout = Layout;

  constructor(
    private router: Router,
  ) { }

  /**
   * Navigates to the provided URL
   * 
   * @param route string
   */
  navTo(route: string): void {
    this.router.navigate([route]);
  }
}
