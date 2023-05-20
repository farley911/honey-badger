import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { Layout } from "../consts/layout.enum";
import { HeaderComponent } from "./header.component";
import { LogoComponent } from "projects/logo/src/lib/logo.component";
import { NavComponent } from "projects/nav/src/lib/nav.component";

const meta: Meta<HeaderComponent> = {
  title: 'Honey Badger/Organisms/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: [ ...Object.keys(Layout) ]},
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
    heading: "Wayne Enterprises",
    href: '/',
    layout: Layout.inline,
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: '75px',
    navItems,
    subheading: "Not affiliated with Batman",
  },
};

export const Vertical: Story = {
  args: {
    heading: "Wayne Enterprises",
    href: '/',
    layout: Layout.vertical,
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: '75px',
    navItems,
    subheading: "Not affiliated with Batman",
  },
};

export const Toolbar: Story = {
  args: {
    heading: "Wayne Enterprises",
    href: '/',
    layout: Layout.inline,
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: '75px',
    navItems,
    subheading: "Not affiliated with Batman",
  },
};
