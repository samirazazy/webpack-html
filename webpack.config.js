const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.html',
  output: {
    path: __dirname + '/dist/',
  },
  devServer: {
    inline: false,
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'ex.html',
    //   template: './src/exercise/01/ex.html',
    //   chunks: ['exEntry'],
    // }),
  ],
};
