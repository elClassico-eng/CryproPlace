const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config({ path: "./.env" });

module.exports = (env) => {
    const isDev = env.mode === "development";
    const isProd = env.mode === "production";

    return {
        mode: env.mode ?? "development",
        entry: "./src/index.jsx",
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build"),
            publicPath: "/",
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
            }),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(process.env),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                            ],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[path][name].[ext]",
                            },
                        },
                    ],
                },
                {
                    test: /\.svg$/,
                    loader: "svg-inline-loader",
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
        devServer: isDev && {
            port: env.port ?? 3000,
            open: true,
            compress: true,
            historyApiFallback: true,
        },
        devtool: isDev && "inline-source-map",
    };
};
