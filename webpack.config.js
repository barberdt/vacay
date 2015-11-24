const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = {
  context: __dirname + '/app',
  entry: {
    vacay: ['babel-polyfill', './screens/Vacay/index'],
    login: ['babel-polyfill', './screens/Login/index'],
    signup: ['babel-polyfill', './screens/Signup/index']
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [new CommonsChunkPlugin('commons.js')],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'shared'
    ]
  },
  devtool: '#eval',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  }
};
