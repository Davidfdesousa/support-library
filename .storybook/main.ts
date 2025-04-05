import type { StorybookConfig } from "@storybook/react-webpack5";
import { join, dirname } from "path";
import { createRequire } from "module";

const myRequire = createRequire(import.meta.url);

function getAbsolutePath(value: string): any {
  return dirname(myRequire.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config?.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      ],
      exclude: /node_modules/,
    });

    config.resolve?.extensions?.push(".ts", ".tsx");

    config.resolve = {
      ...config.resolve,
      fallback: {
        ...(config.resolve?.fallback || {}),
        os: myRequire.resolve("os-browserify/browser"),
        tty: myRequire.resolve("tty-browserify"),
      },
    };

    return config;
  },
};

export default config;
