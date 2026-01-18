import type { StorybookConfig } from "@storybook/react-vite";
import type { AddonOptionsWebpack } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsWebpack = {
  istanbul: {
    include: ['**/stories/**'],
    exclude: ['**/exampleDirectory/**'],
  },
};

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
    {
      name: '@storybook/addon-coverage',
      options: coverageConfig,
    },
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  }
};
export default config;
