const webpack = require('webpack');

module.exports = {
    context: __dirname,

    entry: ['whatwg-fetch', 'babel-polyfill', './assets/js/app.js'],
    // devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output: {
        path: './public/js/',
        filename: 'bundle.js',
        chunkFilename: '[chunkHash].bundle.js',
        // publicPath: '/js/'
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },

    eslint: {
        failOnWarning: false,
        failOnError: true
    }

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             // warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
};
