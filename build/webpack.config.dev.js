const path = require('path')
const merge = require('webpack-merge')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const baseConfig = require('./webpack.config.base.js')

const config = merge(baseConfig, {
	mode: 'development',
	output: {
	    filename: '[name].bundle.js'
	},
	devServer: {
		port: 8000,
    host: '0.0.0.0',
		hot: true,
		headers: { 'Access-Control-Allow-Origin': '*' },
	    proxy: {
	      '/api': {
	        target: 'http://localhost:5757',
	        changeOrigin: true
	      },
	      '/face': {
	        target: 'http://192.168.18.99:9099',
	        changeOrigin: true
	      },
	      '/user': {
	        target: 'http://192.168.18.99:9099',
	        changeOrigin: true
	      }
	    },
		contentBase: path.join(__dirname, '../dist'),
		historyApiFallback:  {
	      index: '/dist/index.html'
	    }
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HotModuleReplacementPlugin(),
	],
	devtool: 'source-map'
})

module.exports = config
