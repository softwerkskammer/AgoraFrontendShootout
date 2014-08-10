module.exports = {
  entry: "./js/main.js",
  output: {
      path: __dirname,
      filename: "build.js"
  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" }
      ]
  }
};
