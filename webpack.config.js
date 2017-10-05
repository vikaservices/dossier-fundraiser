var path = require('path');

module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js",
    support: "./app/assets/scripts/modules/support.js"
  },
  output: {
    path: path.resolve(__dirname, "app/temp/scripts"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
