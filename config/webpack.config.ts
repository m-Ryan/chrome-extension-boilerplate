import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

import path from 'path';

const cwd = process.cwd();

export default {
  entry: {
    web: path.resolve(cwd, 'src/page/web/index.ts'),
    background: path.resolve(cwd, 'src/page/background/index.ts'),
    popup: path.resolve(cwd, 'src/popup/index.tsx'),
  },
  output: {
    path: path.resolve(cwd, 'build'),
    filename: 'static/js/[name].js',
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'none',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: false,
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  useESModules: false,
                  version: '7.0.0-beta.0',
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    writeToDisk: true,
    hot: false,
    inline: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'chrome 插件脚手架',
      inject: true,
      chunks: ['background'],
      filename: 'background.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'public', to: '.' }],
    }),
  ],
};
