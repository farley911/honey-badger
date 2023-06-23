import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import HeaderLayoutsComponent from "./header-layouts.component";

const meta: Meta<HeaderLayoutsComponent> = {
  title: 'Honey Badger/Organisms/Header/Layouts',
  component: HeaderLayoutsComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      // imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<HeaderLayoutsComponent>;

export const primary: Story = {
  render: (args: HeaderLayoutsComponent) => ({
    props: args,
  }),
};