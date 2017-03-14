var webpack = require("webpack");
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// var stylus_plugin = require('stylus_plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin({ filename: 'assets.json', prettyPrint: true });



module.exports = {
	// entry: "./src/main.js", 
	// entry: { app: "./src/main.js" }, //that means that the project's name is app. so the name will be set to app
	entry: { app: ["./src/main.js", "./src/main.css", "./src/main.scss" /*, "./src/main.styl"*/ ] }, //you can not require them inside the main.js & put them directly in here.

	output: {
		path: path.resolve(__dirname, "./dist"),
		// filename: "bundle.js" //hardcoded name
		filename: "[name].js" 
	},

//modules is used to the webpack loaders:-
	module: {
			rules: [
			//you can insert the use as string or an array of loaders
					// { test: /\.css$/, use: ['style-loader','css-loader']}, //this is the css loader. test means the file test to include & the use: means which module to use on it.
					{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
					// { test: /\.s[ac]ss$/, use: ['style-loader','css-loader','sass-loader'], exclude: /node_modules/}, //match both sass,scss

					// {test: /\.s[ac]ss|css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ['css-loader','sass-loader'] }) }  //if you use css-loader it will keep naging you about the relative css links. instead you can just use the raw-loader 
					{test: /\.s[ac]ss|css$/, use: ExtractTextPlugin.extract({ fallback: "style-loader", use: ['raw-loader','sass-loader'] }) },

					// {test: /\.styl$/, use: ['raw-loader', {loader: 'stylus-loader', options: {use: [stylus_plugin()] }}]}


			]
	},


	plugins:[
		new webpack.optimize.UglifyJsPlugin(),  //this unglify our code
  new ExtractTextPlugin("[name].css"), //if you put [name] that means use the name of the original imported file
  new webpack.LoaderOptionsPlugin({minimize:true}), //this will minimize all the css 
  assetsPluginInstance
	]


}


/*************************************************************
you can inject stuff into the webpack object like this:-
*************************************************************/
//this will run in this command only:  $ NODE_ENV=production webpack
// if(process.env.NODE_ENV == "production"){
// 	module.exports.plugins.push(
// 		new webpack.optimize.UglifyJsPlugin(),
//   new webpack.LoaderOptionsPlugin({minimize:true})
// 	)
// }






