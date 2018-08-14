var path = require('path');
module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "../src"), //源文件目录
    devtool: 'inline-source-map',
    // devServer:{
    //     contentBase:"../dist/"
    // },
    entry: {
        main: "./index.js" //在源文件目录下去找index.js 文件作为打包的入口文件
    },
    output: {
        publicPath: 'dist',//webpack-dev-server的调试服务器虚拟目录，本地不会生成
        filename: "[name].bundle.js", //生成的文件 name 表示entry下面的main
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: { presets: ["react", "env"] }
            }],
        },
        {
            test:/\.css$/,
            use:[
                "style-loader","css-loader"
            ]
        }
        ]
    }
}