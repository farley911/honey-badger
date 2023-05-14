import type { Meta, StoryObj } from "@storybook/angular";
import { Layout } from "../consts/layout.enum";
import { HeaderComponent } from "./header.component";


const meta: Meta<HeaderComponent> = {
  title: 'Slut Header',
  component: HeaderComponent,
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {
    layout: Layout.column,
    logoWidth: '200px',
    heading: "",
    subheading: ""
  },
};
