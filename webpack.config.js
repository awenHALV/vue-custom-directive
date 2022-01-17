const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const {resolve} = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  externals:{
    'vue': 'Vue'
  },
  resolve: {
    // 以下扩展名可以不写
    extensions: ['.js', '.jsx', '.vue']
  },
   // 处理文件
   module: {
     rules: [
       {
         test: /\.vue$/i,
         // 单个loader
         loader: 'vue-loader'
       },
       {
         test: /\.scss$/i,
         // 多个loader
         use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
         ]
       }
     ]
   },
   plugins: [
     new VueLoaderPlugin(),
     new HtmlWebpackPlugin({
       template: resolve(__dirname, 'public/index.html')
     })
   ]
}