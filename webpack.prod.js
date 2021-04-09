const webpack= require('webpack')
const path= require('path')
const HtmlWebpackPlugin= require('html-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
const TerserPlugin= require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin= require('optimize-css-assets-webpack-plugin')
const WorkboxPlugin= require('workbox-webpack-plugin')

module.exports={
    entry:'./src/client/index.js',
    mode:'development',
    devtool:'source-map',
    stats:'verbose',
    optimization:{
        minimize:true,
        minimizer: [new TerserPlugin({})]
    },
    output:{
        // libraryTarget:'var',
        // library:'Client'
        path:path.resolve(process.cwd(),'dist')
    },
    module:{
        rules:[
            {
                test:'/\.js$/',
                exclude:/node_modules/,
                loader:'babel-loader'
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/client/views/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
        }),
        new OptimizeCSSAssetsPlugin({}),
        new WorkboxPlugin.GenerateSW()
    ]
    
}