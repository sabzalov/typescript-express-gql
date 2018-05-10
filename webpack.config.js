const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    mode: 'development',
    externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.(graphql|gql)$/,
                loader: 'raw-loader',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        mainFields: ["main", "module"],
        extensions: [ '.tsx', '.ts', '.js', '.gql', '.graphql' ]
    }
};
