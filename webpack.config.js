const path = require("path");

// "production" build is the build deployed to github pages
const NODE_ENV = process.env.NODE_ENV;
const isDebugBuild = NODE_ENV != "production";

module.exports = {
	entry: "./demo/index.jsx",
	output: {
		path: path.resolve("./demo"),
		filename: "build.js"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".jsx", ".json"]
    },
    module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
};