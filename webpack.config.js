const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: false, // true allows use index.html instead of 404
        open: false, // open browser after server starting
        compress: true,
        hot: true, // use PC memory instead of dir to save build files
        port: 8080,
    },
    entry: {
        main: path.resolve(__dirname, './src/index.ts'),
	},
	output: {
        path: paths.dist,
        filename: '[name].bundle.js', // [name] we be replaced with the key of entry file (main for ex.)
	},
	plugins: [
        new HtmlWebpackPlugin({
            title: 'manual-react-app',
            template: path.resolve(__dirname, './src/index.html'), // template
            filename: 'index.html', // name of output file
        }),
        new webpack.HotModuleReplacementPlugin(), // no need to reload page
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'], // transpile new es6+ to es5
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ],
    }
}