/**
 * Created by gellert on 2017/2/16.
 */
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: './src/Client.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../asserts/js/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015","react"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    loader: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallbackLoader: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ManifestPlugin({
            fileName: 'resource.json'
        }),
        new ExtractTextPlugin("../../style/main.css")
    ]
}