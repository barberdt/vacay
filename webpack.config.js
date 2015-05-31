module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: {
    path: __dirname + '/vacay/static/js',
    filename: 'vacay.js'
  }
};