const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: 'app/AppProvider',
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
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        alias: {
            app: path.resolve(__dirname, '')
        }
    }
}
