import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LAYOUT } from '../consts/layout.enum';
import { HeaderComponent } from './header.component';
import { LogoComponent } from 'projects/logo/src/lib/logo.component';
import { NavComponent } from 'projects/nav/src/lib/nav.component';

const meta: Meta<HeaderComponent> = {
  title: 'Honey Badger/Organisms/Header',
  component: HeaderComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/header</span></p><p>Import Module:<br /><span class="code-inline">import { HeaderModule } from \'@farley911/header\';</span></p><p>Available const(s):<br /><span class="code-inline">LAYOUT</span></p>'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: [ ...Object.keys(LAYOUT) ]},
  },
  decorators: [
    moduleMetadata({
      declarations: [LogoComponent, NavComponent],
      imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule],
    })
  ]
}

export default meta;
type Story = StoryObj<HeaderComponent>;

const navItems = [{
  route: '/menu',
  text: 'Menu',
}, {
  route: '/about-us',
  text: 'About Us',
}, {
  route: '/contact',
  text: 'Contact Us',
}];

export const Inline: Story = {
  args: {
    heading: 'Wayne Enterprises',
    href: '/',
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: 75,
    navItems,
    subheading: 'Not affiliated with Batman',
  },
};

export const Vertical: Story = {
  args: {
    heading: 'Wayne Enterprises',
    href: '/',
    layout: LAYOUT.vertical,
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: 75,
    navItems,
    subheading: 'Not affiliated with Batman',
  },
};

export const NoHeading: Story = {
  args: {
    href: '/',
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: 75,
    navItems,
  },
};

export const NoSubheading: Story = {
  args: {
    heading: 'Wayne Enterprises',
    href: '/',
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: 75,
    navItems,
  },
};

export const NoNavigation: Story = {
  args: {
    heading: 'Wayne Enterprises',
    href: '/',
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: 75,
    subheading: 'Not affiliated with Batman',
  },
};

export const NoLogo: Story = {
  args: {
    heading: 'Wayne Enterprises',
    navItems,
    subheading: 'Not affiliated with Batman',
  },
};