const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

let entry = [
  'webpack-dev-server/client?http://0.0.0.0:8080/',
  'webpack/hot/only-dev-server',
  path.resolve(__dirname, './src/main.js'),
]

if (process.env.NODE_ENV === 'production') {
  entry = path.resolve(__dirname, './src/main.js')
}

const config = {
  entry,
  mode: process.env.NODE_ENV || 'development',

  output: {
     path: path.join(__dirname, 'dist'),
     filename: 'build.js',
  },

  module: {
     rules: [{
        test: /\.(css|scss|sass|less)$/,
        loader: 'style-loader!css-loader',
     }, {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
     }],
  },

  resolve: {
     extensions: ['.js', '.jsx', '.css', '.scss', '.sass', '.less'],
     alias: {
        '@': path.resolve('src'),
     },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, './src/index.html'), inject: true }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      port: 8080,
  },
  
  devtool: '#eval-source-map',
};

module.exports = config;
