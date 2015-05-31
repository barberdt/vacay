module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: {
    path: __dirname + '/vacay/static/js',
    filename: 'vacay.js'
  },
  devtool: '#eval',
  module: {
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