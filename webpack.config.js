const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    devServer: {
      contentBase: './dist',
    },
    watch: !isProduction,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.join(__dirname, './dist'),
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
    ],
  };

  return config;
};