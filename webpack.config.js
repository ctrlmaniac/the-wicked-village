const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const STATIC_PATH = process.env.STATIC_PATH || "static";

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      environment: process.env.NODE_ENV,
    }),
    new webpack.DefinePlugin({
      STATIC_PATH: JSON.stringify(STATIC_PATH),
    }),
    new CopyPlugin({
      patterns: [{ from: "public/static", to: "static" }],
    }),
  ],
};
