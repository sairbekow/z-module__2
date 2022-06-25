const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const SvgoPlugin = require("./svgo.config")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: process.env.NODE_ENV,
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/images/[name][ext]"
  },
  devServer: {
    port: 4000,
    hot: isDev,
    watchFiles: [
      'pug/services.pug',
      'pug/index.pug',
      'pug/training.pug',
      'pug/training-list.pug',
      'pug/mixins.pug',
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.png', '.jpg', '.css', '.svg'], //надо чекнуть это свойство
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'pug/index.pug',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pug/training-list.pug',
      filename: 'single-training.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pug/training.pug',
      filename: 'training.html',
    }),
    new HtmlWebpackPlugin({
      template: 'pug/services.pug',
      filename: 'services.html',
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          {
            loader: 'sass-loader', options: {
              sassOptions: {minimum: false, outputStyle: 'expanded'}
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          pretty: true
        }
      },
    ]
  },
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", {interlaced: true}],
              ["jpegtran", {progressive: true}],
              ["optipng", {optimizationLevel: 5}],
              ["svgo", {SvgoPlugin}],
            ],
          },
        },
      })
    ],
  },
}