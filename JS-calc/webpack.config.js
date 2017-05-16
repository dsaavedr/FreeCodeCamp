// Dependencies

const   debug = process.env.NODE_ENV !== 'production',
        extractTextPlugin = require('extract-text-webpack-plugin');
        path = require('path'),
        webpack = require('webpack');

// Others

// const CSS = new extractTextPlugin('./src/styles/master.sass')

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    app: ['./js/app.js', './styles/master.sass'],
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
        include: path.resolve(__dirname, './src/styles/'),
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new extractTextPlugin({
      filename: 'master.css',
      disable: false,
      allChunks: true
    })
  ]
};

(() => {
  if (!debug) {
    module.exports.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false
      })
    );
  }
})();
