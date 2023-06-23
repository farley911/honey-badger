import { Meta, StoryObj } from "@storybook/angular";
import HeaderLayoutsComponent from "./header-layouts.component";

const meta: Meta<HeaderLayoutsComponent> = {
  title: 'Honey Badger/Organisms/Header/Layouts',
  component: HeaderLayoutsComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<HeaderLayoutsComponent>;

export const primary: Story = {
  render: (args: HeaderLayoutsComponent) => ({
    props: args,
  }),
};