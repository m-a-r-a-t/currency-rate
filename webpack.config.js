const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

const cssLoaders = (extra) => {
    const loaders =
        [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev,
                    reloadAll: true
                },
            }, 'css-loader'
        ]

    if (extra)
        loaders.push(extra)

    return loaders
}

const babelOptinos = (preset) => {
    const opts = {
        presets: ['@babel/preset-env'],
    }
    if (preset)
        opts.presets.push(preset)

    return opts

}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './index.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Currency App',
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                },

            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/i,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptinos()
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptinos('@babel/preset-react')
                }
            }
        ]
    }
}