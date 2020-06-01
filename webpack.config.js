const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './index.jsx',
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
};