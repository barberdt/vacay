module.exports = {
  context: __dirname + '/app',
  entry: './entry',
  output: {
    path: __dirname + '/vacay/static/js',
    filename: 'vacay.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
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