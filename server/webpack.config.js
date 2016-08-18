/* eslint-disable comma-dangle */
const path = require('path');

module.exports = {
    entry: ['./cluster.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint', 'jscs'],
                include: path.join(__dirname, 'src')
            }
        ],
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                },
            }
        ]
    }
};
