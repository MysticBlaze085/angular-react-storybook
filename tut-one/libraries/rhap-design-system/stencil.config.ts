import { Config } from '@stencil/core';
import { readFileSync } from 'fs';
import tailwind from 'stencil-tailwind'

export const config: Config = {
  namespace: 'rhap-design-system',
  taskQueue: 'async',
  sourceMap: true,
  enableCache: true,
  plugins: [
    tailwind()
  ],
  extras: {
    experimentalImportInjection: true,
  },
  devServer: {
    reloadStrategy: 'pageReload',
    port: 4444
  }
};
