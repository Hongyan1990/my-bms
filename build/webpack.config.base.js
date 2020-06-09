const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
	entry: {app: path.resolve(__dirname, '../src/main.js')},
	output: {
		publicPath: '/dist/',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 1024 * 30,
							fallback: 'file-loader'
						}
					}
				]
			},
			{
		        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
		        use: ['file-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLPlugin({template: path.join(__dirname, 'template.html'), title: 'hello scss'}),
		new HTMLPlugin({template: path.resolve(__dirname, '../public/test.html'), filename: 'test.html'}),
		new VueLoaderPlugin(),
		new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'zh-cn'],
        }),
	]
}