const   debug = process.env.NODE_ENV !== 'production',
        path = require('path'),
        webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    app: './js/app.js',
    styles: './styles/master.sass'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }],
      },
      {
        test: /\.sass$/,
        use: [{
          loader: 'style-loader',
        },{
          loader: 'css-loader',
        },{
          loader: 'sass-loader',
        }]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  ]
};
