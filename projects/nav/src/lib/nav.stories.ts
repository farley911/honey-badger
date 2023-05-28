import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NavComponent } from "./nav.component";
import { LAYOUT } from "../consts/layout.enum";

const meta: Meta<NavComponent> = {
  title: 'Honey Badger/Molecules/Nav',
  component: NavComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/nav</span></p><p>Import Module:<br /><span class="code-inline">import { NavModule } from \'@farley911/nav\';</span></p><p>Available const(s):<br /><span class="code-inline">LAYOUT</span></p><p>Available interface(s):<br /><span class="code-inline">NavItem</span></p>'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {layout: { control: 'select', options: [ ...Object.keys(LAYOUT) ]},},
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
    layout: LAYOUT.inline,
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
    layout: LAYOUT.vertical,
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
