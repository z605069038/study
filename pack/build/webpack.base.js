const path = require("path");
const dev = require("./webpack.dev");
const prod = require("./webpack.prod");
const merge = require("webpack-merge");//合并config文件
const HtmlWebpackPlugin = require("html-webpack-plugin");//打包html
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//抽离css
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清理


module.exports = env => {
    let isDev = env.development;

    const base = {
        entry:'./src/index.js',
        output: {
        filename: "build.js",
        path: path.resolve(__dirname, "../dist")
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template:path.resolve(__dirname,'../public/index.html'),
                hash: true,
            }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.resolve(__dirname,'../dist')],
            }),
            !isDev && new MiniCssExtractPlugin({
                filename: "css/[name].[contentHash].css"
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use:[
                            !isDev && MiniCssExtractPlugin.loader,
                            isDev && 'style-loader',
                            "css-loader"
                        ].filter(Boolean)
                },
                {
                    test:/\.jpe?g|png|gif/,
                    use:{
                        loader:'file-loader',
                        options:{
                            limit:100*1024,//限制大小转化成Base64
                            name:`img/[name].[ext]`
                        }
                    }
                },
                { test: /\.js$/, use: "babel-loader" }
            ]
        }
    };

    if (isDev) {
        return merge(base, dev);
    } else {
        return merge(base, prod);
    }
};