/** @type { import('@storybook/html').Preview } */

import {defineCustomElements} from '../loader';

import '../src/styles.css';

defineCustomElements();

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
