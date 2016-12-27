var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.template.html',
            inject: true
        }),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css", {
            allChunks: true
        })
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
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    }
};