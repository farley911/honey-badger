import { Meta, StoryObj } from "@storybook/angular";

import { SocialNetworkLogoComponent } from "./social-network-logo.component";
import { SOCIAL_NETWORKS } from "../consts/SOCIAL_NETWORK.consts";
import { SocialNetworkNames } from "../consts/social-network-names.enum";

const meta: Meta<SocialNetworkLogoComponent> = {
  title: 'Honey Badger/Atoms/Social Network Icon',
  component: SocialNetworkLogoComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/social-network-logo</span></p><p>Import Module:<br /><span class="code-inline">import { SocialNetworkLogoModule } from \'@farley911/social-network-logo\';</span></p>'
      }

    }
  },
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<SocialNetworkLogoComponent>;

export const Primary: Story = {
  args: {
    socialNetwork: SOCIAL_NETWORKS.get(SocialNetworkNames.instagram),
    width: '35px',
  }
}
