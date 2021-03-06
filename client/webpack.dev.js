var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        root: path.resolve( path.join(__dirname, 'src') ),
        extensions: ['', '.js']
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/index')
    ],
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.template.html'),
            inject: true
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new DashboardPlugin()
    ],
    module: {
        preLoaders: [
            { test: /\.json$/, loader: 'json'},
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'babel'],
                exclude: /node_modules/,
                include: __dirname
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            }, {
                test: /\.jpg$/,
                loader: "file-loader"
            }, {
                test: /\.svg$/,
                loader: 'babel!svg-react'
            }, {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
};