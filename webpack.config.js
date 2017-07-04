var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build/'),
    publicPath: "/build/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] 
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { 
            loader: 'css-loader',
            options: { 
              minimize: true
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
   extensions: ['*', '.js', '.es6']
  }
}