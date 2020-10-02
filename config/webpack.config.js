const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '..', '/dist')
    },
    mode: 'none',
    target: 'node',
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin()
    ]
}