import { Component, Input } from '@angular/core';

import { Layout } from '../consts/layout.enum';
import { NavItem } from '../models/nav-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'hb-nav',
  templateUrl: './nav.component.html',
  styleUrls: []
})
export class NavComponent {
  /**
   * The nav can be either inline or vertical.
   */
  @Input() layout: Layout

  /**
   * Collection of NavItems
   */
  @Input() navItems: NavItem[];

  constructor(
    private router: Router,
  ) { }

  /**
   * Navigates to the provided URL
   * 
   * @param path string
   */
  navTo(path: string): void {
    this.router.navigate([path]);
  }
}
