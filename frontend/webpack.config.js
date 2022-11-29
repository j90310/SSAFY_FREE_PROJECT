// socket연결을 위한 webpack설정
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './socket-server/index.js',
   output: {
	  path: path.join(__dirname, '/bundle'),
	  filename: 'index_bundle.js'
   },
   devServer: {
	  port: 8001
   },
   module: {
	  rules: [
		 {
			test: /\.js?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		 }
	  ]
   },
   plugins:[
	  new HtmlWebpackPlugin({
		 name: "index.html",
		 inject: false,
		 template: './index.html'
	  })
   ]
}

module.exports = {
	presets: [
	  '@babel/preset-env',
	  '@babel/preset-react',
	],
}