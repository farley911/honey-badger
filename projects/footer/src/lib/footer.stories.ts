import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { LogoComponent } from "@farley911/logo";
import { NavComponent } from "@farley911/nav";

import { FooterComponent } from "./footer.component";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

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
      imports: [MatButtonModule, MatMenuModule, BrowserAnimationsModule],
    }),
    componentWrapperDecorator(FooterComponent),
  ]
}

export default meta;

type Story = StoryObj<FooterComponent>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template:  `
      <hb-footer [navItems]="navItems">
        <p>
          <span class="company-name">Wayne Enterprises</span><br />
          1 Wayne Manor<br />
          (555) 555-5555
        </p>
        <p legalize>
          &copy; Wayne Enterprises 2023
        </p>
      </hb-footer>
    `,
  }),
  args: {
    navItems: [{route: '/', text: 'Home'}, {route: '/menu', text: 'Menu'}, {route: '/contact', text: 'Contact'}],
  },
}
