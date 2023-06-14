import { Meta, StoryObj, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { FooterComponent } from "./footer.component";
import { LogoComponent } from "projects/logo/src/lib/logo.component";
import { NavComponent } from "projects/nav/src/lib/nav.component";
import { SocialNetworkNames } from "projects/social-network-logo/src/consts/social-network-names.enum";
import { SOCIAL_NETWORK_LOGOS } from "projects/social-network-logo/src/consts/SOCIAL_NETWORK_LOGOS.consts";
import { SocialNetworkLinksComponent } from "projects/social-network-links/src/lib/social-network-links.component";
import { SocialNetworkLogoComponent } from "projects/social-network-logo/src/lib/social-network-logo.component";

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
      declarations: [LogoComponent, NavComponent, SocialNetworkLinksComponent, SocialNetworkLogoComponent],
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
      <hb-footer [navItems]="navItems" [socialNetworks]="socialNetworks">
        <p>
          <span class="company-name">Wayne Enterprises</span><br />
          <a href="mailto:bruce@wayneenterprises.com">bruce@wayneenterprises.com</a><br />
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
    socialNetworks: [
      {
        name: SocialNetworkNames.facebook,
        logo: SOCIAL_NETWORK_LOGOS.get(SocialNetworkNames.facebook)?.logo!,
        url: 'http://www.facebook.com'
      }, 
      {
        name: SocialNetworkNames.instagram,
        logo: SOCIAL_NETWORK_LOGOS.get(SocialNetworkNames.instagram)?.logo!,
        url: 'http://www.instagram.com'
      },
      {
        name: SocialNetworkNames.snapchat,
        logo: SOCIAL_NETWORK_LOGOS.get(SocialNetworkNames.snapchat)?.logo!,
        url: 'http://www.snapchat.com'
      }]
  },
}
