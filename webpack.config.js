const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //context - за какой папкой смотреть
    context: path.resolve(__dirname, 'src'), // возращает абс.путь до текущий дирректории + /src
    //mode - режим вебпака
    mode: 'development',
    //входная точка для приложения
    entry: './index.js',
    //имя и путь для output bundle (сжатый код):
    output: {
        //[hash] - вставляет хэш в имя файла, чтобы избежать проблемы с кэшированием
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html' //откуда брать шаблон, путь берется относительно контекста 
        })
    ]
}