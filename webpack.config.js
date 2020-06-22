const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
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
    }),
    new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-native$": "react-native-web"
    }
  }
};
