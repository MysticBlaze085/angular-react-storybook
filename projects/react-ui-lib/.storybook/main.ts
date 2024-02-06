import { StorybookConfig } from "@storybook/react";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    'storybook-addon-designs',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "react", // Specify the framework as "react"
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module ??= { rules: [] };
    config.module.rules ??= [];
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.resolve ??= { extensions: [] };
    config.resolve.extensions ??= [];
    config.resolve.extensions.push('.ts');
    return config;
  },
};

export default config;
