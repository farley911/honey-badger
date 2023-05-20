import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from "./nav.component";
import { Layout } from "../consts/layout.enum";

const meta: Meta<NavComponent> = {
  title: 'Honey Badger/Molecules/Nav',
  component: NavComponent,
  tags: ['autodocs'],
  argTypes: {layout: { control: 'select', options: [ ...Object.keys(Layout) ]},},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule]
    })
  ]
}

export default meta;
type Story = StoryObj<NavComponent>;

export const Inline: Story = {
  args: {
    layout: Layout.inline,
    navItems: [{
      route: '/',
      text: 'Home',
    }, {
      route: '/menu',
      text: 'Menu',
    }, {
      route: '/contact',
      text: 'Contact',
    }]
  },
};

export const Nested: Story = {
  args: {
    layout: Layout.inline,
    navItems: [{
      route: '/',
      text: 'Home',
    }, {
      children: [{
        route: '/child1',
        text: 'Child 1',
      }, {
        route: '/child2',
        text: 'Child 2',
      }],
      text: 'Nested Item',
    }, {
      route: '/contact',
      text: 'Contact',
    }]
  },
};

export const Vertical: Story = {
  args: {
    layout: Layout.vertical,
    navItems: [{
      route: '/',
      text: 'Home',
    }, {
      children: [{
        route: '/child1',
        text: 'Child 1',
      }, {
        route: '/child2',
        text: 'Child 2',
      }],
      text: 'Nested Item',
    }, {
      route: '/contact',
      text: 'Contact',
    }]
  },
};
