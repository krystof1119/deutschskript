const path = require('path');
let nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [/*'babel-loader', */'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "commonjs2",
  },
  mode: 'development',
  devtool: 'none',
};
