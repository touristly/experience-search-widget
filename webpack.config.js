const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: path.resolve(path.join(__dirname, "build")),
    filename: "app-[hash].bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.(js|jsx)?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env", "@babel/react"]
        }
      },
      {
        test: /\.css$/i,
        use: ["css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "react-native": "react-native-web"
    }
  }
};
