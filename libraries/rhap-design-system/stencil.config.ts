import { Config } from '@stencil/core';
import tailwind from "stencil-tailwind";

export const config: Config = {
  namespace: 'libraries/rhap-design-system',
  taskQueue: 'async',
  sourceMap: true,

  extras: {
    experimentalImportInjection: true,
  },
  plugins: [
    tailwind()
  ],
  devServer: {
    reloadStrategy: 'pageReload'
  }
};
