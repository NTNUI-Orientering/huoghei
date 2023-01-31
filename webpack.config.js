const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const prod = process.env.NODE_ENV == "production";


module.exports = {
    
    mode: prod ? "production" : "development",
    entry: {
        index: "./src/index.tsx"
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + "/distribution",
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/public")
        }
    },
    devtool: prod ? undefined : "source-map",
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
                test: /\.(png|jpg|gif|webp)$/i,
                oneOf: [
                    {
                        resourceQuery: /srcset/,
                        use: [
                            {
                                loader: "webpack-image-srcset-loader",
                                options: {
                                    sizes: ["600w", "900w", "1200w", "1600w"],
                                },
                            },
                            "file-loader",
                            "webpack-image-resize-loader",
                        ]
                    },
                    {
                        resourceQuery: /width900/,
                        use: [
                            {
                                loader: "webpack-image-srcset-loader",
                                options: {
                                    sizes: ["900w"],
                                },
                            },
                            "file-loader",
                            "webpack-image-resize-loader",
                        ],
                    },
                    {
                        use: {
                            loader: 'file-loader',
                        }
                    }
                ],                
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            favicon: "./public/ntnui_banner-60x60.png",
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns : [{
                from: "./public/.htaccess.txt"
                }
            ]
        })
    ],
};