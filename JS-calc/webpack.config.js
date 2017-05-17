// Dependencies

const   debug = process.env.NODE_ENV !== 'production',
        extractTextPlugin = require('extract-text-webpack-plugin'),
            extractCSS = new extractTextPlugin({
              filename: 'master.css',
              disable: false,
              allChunks: true
            }),
            extractPug = new extractTextPlugin({
              filename: 'index.html',
              disable: false,
              allChunks: true
            }),
        path = require('path'),
        webpack = require('webpack');

// Others

// const CSS = new extractTextPlugin('./src/styles/master.sass')

module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    app: ['./js/app.js', './styles/master.sass', './pug/index.pug'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }],
      },
      {
        test: /\.sass$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.pug$/,
        use: extractPug.extract({
          use: ['html-loader', 'pug-html-loader?pretty']
        })
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true
    // port: 9000,
    // stats: 'errors-only'
  },
  plugins: [
    extractCSS,
    extractPug
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
