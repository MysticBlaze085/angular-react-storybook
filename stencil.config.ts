import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';

import { Config } from '@stencil/core';
import autoprefixer from 'autoprefixer';
import {postcss} from '@stencil/postcss';

export const config: Config = {
  namespace: 'rhap-design-system',
  plugins : [
    postcss({
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer()
      ]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    // {
    //   type: 'www',
    //   serviceWorker: null, // disable service workers
    // },
  ],
  testing: {
    browserHeadless: "new",
  },
};
