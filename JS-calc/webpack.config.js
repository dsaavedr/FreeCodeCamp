const debug = process.env.NODE_ENV !== 'production';

// Dependencies

const   bootstrapEntryPoints = require('./webpack.bootstrap.config.js'),
        extractTextPlugin = require('extract-text-webpack-plugin'),
            extractCSS = new extractTextPlugin({
              filename: 'styles/[name].bundle.css',
              disable: debug,
              allChunks: true
            }),
            // extractPug = new extractTextPlugin({
            //   filename: 'index.html',
            //   disable: false,
            //   allChunks: true
            // }),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        path = require('path'),
        webpack = require('webpack');

const   prodCSS = extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader?minimize', 'postcss-loader', 'sass-loader']
        }),
        devCSS = ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        cssConfig = debug ? devCSS : prodCSS,
        bootstrapConfig = debug ? bootstrapEntryPoints.dev : bootstrapEntryPoints.prod;


let config = module.exports = {
  context: path.resolve(__dirname, './src'),
  devtool: debug ? 'inline-sourcemap' : false,
  entry: {
    app: ['./js/app.js', './styles/master.sass', './pug/index.pug'],
    bootstrap: bootstrapConfig
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader'
        }],
      },
      {
        test: /\.sass$/,
        use: cssConfig
      },
      // {
      //   test: /\.pug$/,
      //   use: extractPug.extract({
      //     use: ['html-loader', 'pug-html-loader?' + (debug ? 'pretty' : '')]
      //   })
      // },
      {
        test: /\.(png|svg|jpe?g|gif|avg)$/,
        use: [
          // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/', // Processing
          'file-loader?name=images/[name].[ext]', // Optmizaton. If public and output paths are equal
          'image-webpack-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: ['html-loader', 'pug-html-loader?' + (debug ? 'pretty' : '')],
      },
      {
        test: /\.(woff2?|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    open: true,
    hot: true
    // port: 9000,
    // stats: 'errors-only'
  },
  plugins: [
    extractCSS,
    // extractPug,
    new HtmlWebpackPlugin({
      title: 'Javascript Calculator',
      hash: true,
      template: './pug/index.pug'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery'
    })
  ]
};

(() => {
  // Production plugins
  if (!debug) {
    [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        sourcemap: false
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
      })
    ].forEach((item) => {config.plugins.push(item)});

  }
})();
