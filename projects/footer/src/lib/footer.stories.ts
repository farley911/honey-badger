import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FooterComponent } from "./footer.component";
import { LogoComponent } from "@farley911/logo";
import { NavComponent } from "@farley911/nav";

const meta: Meta<FooterComponent> = {
  title: 'Honey Badger/Organisms/Footer',
  component: FooterComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/footer</span></p><p>Import Module:<br /><span class="code-inline">import { FooterModule } from \'@farley911/footer\';</span></p>'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [
    moduleMetadata({
      declarations: [LogoComponent, NavComponent],
      // imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule],
    })
  ]
}

export default meta;
type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  args: {
  }
}
