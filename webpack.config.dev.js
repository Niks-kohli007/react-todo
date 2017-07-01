const combineLoaders = require('webpack-combine-loaders');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './source/index.js',
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader',
    },
    {
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract(
        combineLoaders([{
          loader: 'css-loader!sass-loader!resolve-url-loader!sass-loader?sourceMap',
        }])
      ),
    }],
  },
  resolve: {
    modules: ['node_modules', 'source'],
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('assets/styles.css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
  ],
  output: {
    path: `${__dirname}/distribution`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './distribution',
    hot: true,
  },
};
