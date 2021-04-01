const path = require("path");
const HTMLWepackPlugin = require("html-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "src", "index"),
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    inline: true,
    host: "localhost",
    port: 8080,
  },
  plugins: [
    new HTMLWepackPlugin({
      title: "Titulo",
      filename: "index.html",
      template: "./src/index.html",
      minify: false,
    }),
    new InjectManifest({
      swSrc: "./src/service-worker.js",
      swDest: "sw.js",
    }),
  ],
};
