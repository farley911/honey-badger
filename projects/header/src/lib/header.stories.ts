import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';
import { LogoComponent } from 'projects/logo/src/lib/logo.component';
import { NavComponent } from 'projects/nav/src/lib/nav.component';

const layout = `
  <p>
    Install Module:<br />
    <span class="code-inline">npm i @farley911/header</span>
  </p>
  <p>
    Import Module:<br />
    <span class="code-inline">import { HeaderModule } from \'@farley911/header\';</span>
  </p>
`;

const meta: Meta<HeaderComponent> = {
  title: 'Honey Badger/Organisms/Header',
  component: HeaderComponent,
  parameters: {
    docs: {
      description: {
        component: layout,
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: [ 1, 2 ]},
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

export const LayoutOne: Story = {
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

export const LayoutTwo: Story = {
  args: {
    heading: 'Wayne Enterprises',
    href: '/',
    layout: 2,
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: 75,
    navItems,
    subheading: 'Not affiliated with Batman',
  },
};