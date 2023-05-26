import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { LogoComponent } from "./logo.component";


const meta: Meta<LogoComponent> = {
  title: 'Honey Badger/Atoms/Logo',
  component: LogoComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/logo</span></p><p>Import Module:<br /><span class="code-inline">import { LogoModule } from \'@farley911/logo\';</span></p>'
      }
    }
  },
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
