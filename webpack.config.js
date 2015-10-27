'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: 'timekit-booking.js',
        libraryTarget: 'umd',
        library: 'timekitBooking'
    },
    externals: {
        'jquery': 'jQuery'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/)
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.svg$/, loader: 'svg-inline' }
        ]
    }
};
