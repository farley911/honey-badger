import { Meta, StoryObj } from "@storybook/angular";

import { SocialNetworkLinksComponent } from "./social-network-links.component";

const meta: Meta<SocialNetworkLinksComponent> = {
  title: 'Honey Badger/Molecules/Social Network Links',
  component: SocialNetworkLinksComponent,
  parameters: {
    docs: {
      description: {
        component: '<p>Install Module:<br /><span class="code-inline">npm i @farley911/social-network-links</span></p><p>Import Module:<br /><span class="code-inline">import { SocialNetworkLinksModule } from \'@farley911/social-network-links\';</span></p>',
      }
    }
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<SocialNetworkLinksComponent>;

export const Inline: Story = {
  args: {
  },
}
