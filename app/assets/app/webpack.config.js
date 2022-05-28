const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/appProvider.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        clean: true
    },
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
        port: '4000',
        host: 'localhost',
        client: {
            logging: 'log',
            progress: true,
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Consignment Mentor'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, 'src/')
        }
    }
}
