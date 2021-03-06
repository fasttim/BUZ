'use strict'
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, "../", dir);
}

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: ['./polyfill.js', './app.js', './core/buz.js'],
    resolve: {
        extensions: ['.js', '.css'],
        alias: {
            "~": resolve("src")
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: "/\.css$/",
                use: [
                    'style-loader/useable',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true, plugins: [require("autoprefixer")("last 100 versions")] } },
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader/useable',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: 'postcss-loader', options: { sourceMap: true, plugins: [require("autoprefixer")("last 100 versions")] } },
                    { loader: 'less-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.(png|ico|jpg)$/,
                loader: 'url-loader'
            }
        ]
    }
};