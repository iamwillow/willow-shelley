var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/, //test = what kind of files get loaded
        exclude: /node_modules/, // exclude = ignored files
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] 
        }
      }
    ]
  },
  resolve: {
   extensions: ['*', '.js', '.es6']
  }
  // {
  //    test: /\.css$/,
  //    use: [
  //      { loader: 'style-loader' },
  //      { loader: 'css-loader' }
  //    ]
  //  },
  //  {
  //    test: /\.scss$/,
  //    use: [
  //      { loader: 'style-loader' },
  //      { loader: 'css-loader' },
  //      { loader: 'sass-loader' }
  //    ]
  //  },
}