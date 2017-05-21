
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var BUILD_DIR = path.resolve(__dirname, 'client');
var APP_DIR = path.resolve(__dirname, 'client/jsx');
// var nodeModules = {};
// fs.readdirSync('node_modules')
//     .filter(function(x) {
//         return ['.bin'].indexOf(x) === -1;
//     })
//     .forEach(function(mod) {
//         nodeModules[mod] = 'commonjs ' + mod;
//     });
//
// module.exports = [{
//
//     entry: './server/index.js',
//     target: 'node',
//     output: {
//         path: path.join(__dirname, 'client'),
//         filename: 'bundle.js'
//     },
//
//     module : {
//         loaders : [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader'
//             }
//         ]
//     },
//     externals: nodeModules
// },
// ]

var BUILD_DIR = path.resolve(__dirname, 'client');
var APP_DIR = path.resolve(__dirname, 'client/jsx');

var config = {
    entry: APP_DIR +'/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'client.bundle.js'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.js', '.jsx'],
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR ,
                loader : 'babel-loader'
            }
        ]
    },
    devServer:{
        historyApiFallback: true
    }
};

module.exports = config