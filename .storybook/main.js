module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset"
  ],

  "webpackFinal": async (config) => {
    const path  = require('path');
    config.resolve.alias['src'] = path.resolve(__dirname, '../src')
    config.resolve.alias['components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['Providers'] = path.resolve(__dirname, '../src/Providers')
    return config
  }

}


/* 

  webpackFinal: async (config, { configType }) => {
    const path  = require('path');

    config.module.rules.push({
      test: /\.module\.css$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        require.resolve('sass-loader')
      ],
    });

    
    
    return config;
  },
*/