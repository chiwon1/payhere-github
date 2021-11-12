const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["styled-components"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
  },
};

module.exports = config;
