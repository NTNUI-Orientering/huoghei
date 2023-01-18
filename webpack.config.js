const prod = process.env.NODE_ENV === "production";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    mode: prod ? "production" : "development",
    entry: "./src/index.tsx",
    output: {
        path: __dirname + "/distribution",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: "ts-loader",
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'less-loader'
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
                
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/")
        }
    },
    devtool: prod ? undefined : "source-map",
    plugins: [
        new HtmlWebPackPlugin({
            template: "index.html",
            favicon: "./src/assets/images/ntnui_banner-60x60.png",
        }),
        new MiniCssExtractPlugin(),
    ],
};