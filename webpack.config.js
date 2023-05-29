const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Update the entry point if necessary
  output: {
    path: path.resolve(__dirname, "public"), // Update the output path
    filename: "index.bundle.js", // Update the output file name
    publicPath: "/", // Add publicPath if necessary
  },

  devServer: {
    port: 3010,
    historyApiFallback: true, // Enable historyApiFallback to handle client-side routing
  },

  devtool: "cheap-module-source-map", // Disable source map loading

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
};
