import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";

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
      imports: [MatButtonModule]
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
