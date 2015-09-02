var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = {
  context: __dirname + '/app',
  entry: {
    vacay: './screens/Vacay/index',
    login: './screens/Login/index',
    signup: './screens/Signup/index'
  },
  output: {
    path: __dirname + '/src/static/js',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  plugins: [new CommonsChunkPlugin('commons.js')],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [
      'node_modules',
      'shared'
    ],
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 1,
          cacheDirectory: true
        }
      }
    ]
  }
};
