import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { componentWrapperDecorator } from '@storybook/angular';

import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Honey Badger', ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages']],
      },
    },
  },
  decorators: [componentWrapperDecorator((story) => `<div class='mat-typography'>${story}</div>`)],
};

export default preview;
