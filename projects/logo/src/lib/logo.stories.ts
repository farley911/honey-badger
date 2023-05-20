import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { LogoComponent } from "./logo.component";


const meta: Meta<LogoComponent> = {
  title: 'Honey Badger/Atoms/Logo',
  component: LogoComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: []
    })
  ]
}

export default meta;
type Story = StoryObj<LogoComponent>;

export const Primary: Story = {
  args: {
    href: '/',
    logoAlt: 'Wayne Enterprises',
    logoUrl: 'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png',
    logoWidth: '200px',
  },
};
