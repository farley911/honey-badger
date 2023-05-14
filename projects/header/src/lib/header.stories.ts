import type { Meta, StoryObj } from "@storybook/angular";
import { Layout } from "../consts/layout.enum";
import { HeaderComponent } from "./header.component";


const meta: Meta<HeaderComponent> = {
  title: 'Spear LT | Honey Badger/Organisms/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: [ ...Object.keys(Layout) ]},
  }
}

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Row: Story = {
  args: {
    layout: Layout.row,
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: '200px',
    heading: "Wayne Enterprises",
    subheading: "Not affiliated with Batman",
  },
};

export const Column: Story = {
  args: {
    layout: Layout.column,
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: '200px',
    heading: "Wayne Enterprises",
    subheading: "Not affiliated with Batman",
  },
};
