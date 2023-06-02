import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";

import { SocialNetworkLinksComponent } from "./social-network-links.component";
import { SocialNetworkNames } from "projects/social-network-logo/src/consts/social-network-names.enum";
import { SocialNetworkLogoComponent } from "projects/social-network-logo/src/lib/social-network-logo.component";
import { SOCIAL_NETWORK_LOGOS } from "projects/social-network-logo/src/consts/SOCIAL_NETWORK_LOGOS.consts";

const meta: Meta<SocialNetworkLinksComponent> = {
  title: 'Honey Badger/Molecules/Social Network Links',
  component: SocialNetworkLinksComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/social-network-links</span></p><p>Import Module:<br /><span class="code-inline">import { SocialNetworkLinksModule } from \'@farley911/social-network-links\';</span></p>'
      }


    }
  },
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [SocialNetworkLogoComponent],
    })
  ]
}

export default meta;

type Story = StoryObj<SocialNetworkLinksComponent>;

export const Primary: Story = {
  args: {
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
      }
    ],
  }
}
