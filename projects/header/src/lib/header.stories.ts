import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { Layout } from "../consts/layout.enum";
import { HeaderComponent } from "./header.component";
import { MatButtonModule } from "@angular/material/button";


const meta: Meta<HeaderComponent> = {
  title: 'Spear LT | Honey Badger/Organisms/Header',
  component: HeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: [ ...Object.keys(Layout) ]},
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule]
    })
  ]
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
