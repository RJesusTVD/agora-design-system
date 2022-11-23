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
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css']
  }
};
