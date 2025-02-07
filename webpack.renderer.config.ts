import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

// Add a rule for image files
rules.push({
  test: /\.(png|jpe?g|gif|svg)$/i, // Match image file extensions
  type: "asset/resource", // Use asset/resource to emit the file
});

rules.push({
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
