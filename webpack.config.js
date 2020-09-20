const path = require('path');

module.exports = {
    context: __dirname,
    entry: './typescript/script.ts',
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'script.js',
        publicPath: '/js/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts']
    }
};