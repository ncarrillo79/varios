const HtmlWebpackPlugin=require('Html-webpack-plugin')

module.exports={

    entry:'./src/app.js',
    output: {
        path:__dirname +'/build',
        filename:'bundle.js'
    },

    
}