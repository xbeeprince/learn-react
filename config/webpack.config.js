var path = require('path');
module.exports = {
        mode:"development",
    　　context: path.resolve(__dirname,"../src"), //源文件目录
    　　entry:{
    　　　　main:"./index.js" //在源文件目录下去找index.js 文件作为打包的入口文件
    　　},
    　　output:{
    　　　　path:path.resolve(__dirname,"../dist"), //生成的文件存放目录
    　　　　filename:"[name].bundle.js" //生成的文件 name 表示entry下面的main
    　　}
    }