var path = require('path');
module.exports = {
	entry:'./src/root.js',
	output:{
		path:path.resolve(__dirname , './src'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/(node_modules)/,
				query:{
					presets:['es2015','react']
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	}
}