/**
 * @file webpack 基础配置
 * @author  lvmengmeng
 */
const path = require('path');
const config = {
    // webpack4新增mode：根据环境变量区分development/production
    mode: process.env.NODE_ENV,
    // 项目入口
    entry: path.join(__dirname, '../src/index.js'),
    // 项目打包
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    // 项目引用
    resolve: {
        // require时省略的扩展名
        extensions: ['.js', '.jsx', '.vue', 'json']
    },
    // 模块加载器 项目依赖loader配置
    module: {
        rules: [
            {
                test: /\.(vue|js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(eot|woff|woff2|ttf)([\\?]?.*)$/,
                loader: 'file-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};


module.exports = config;
