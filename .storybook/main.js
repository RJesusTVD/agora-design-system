module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../src/assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
    'storybook-addon-next'
  ],
  features: {
    previewMdx2: true
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css']
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        if (!prop.parent) {
          return true;
        }

        return (
          !/node_modules/.test(prop.parent.fileName) &&
          prop.parent.name !== 'DOMAttributes' &&
          prop.parent.name !== 'HTMLAttributes' &&
          prop.parent.name !== 'AriaAttributes'
        );
      }
    }
  }
};
