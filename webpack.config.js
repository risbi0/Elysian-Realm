const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const glob = require('glob');

const isDevelopment = process.argv[process.argv.indexOf('--mode') + 1] === 'development';

const getFiles = () => {
    const files = [];
    glob('src/assets/img/**/*.png', (_, imagePaths) => {
        for (const imagePath of imagePaths) files.push({ from: imagePath, to: 'static/img' });
    });
    files.push({ from: 'src/assets/favicon', to: 'static/favicon' }, 'src/serviceWorker.js', 'src/site.webmanifest');
    return files;
}

module.exports = {
    target: 'web',
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
        open: true,
        hot: true,
        liveReload: true,
        static: './dist'
    },
    entry: './src/scripts/script.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/script.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/pages/index.html',
            filename: 'index.html',
            minify: isDevelopment ? false : {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: {
                    compress: {
                        conditionals: false
                    }
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/pages/about.html',
            filename: 'about.html',
            minify: isDevelopment ? false : {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: {
                    compress: {
                        conditionals: false
                    }
                }
            }
        }),
        new CopyWebpackPlugin({
            patterns: getFiles()
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            name: 'static/styles/[name].css'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            name: 'static/styles/[name].css'
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
}