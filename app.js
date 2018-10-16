// 1 导包
const express = require('express');
const router = require('./router');
const parser = require('body-parser');
// 2 app对象
const app = express();

// 配置包
app.engine('html',require('express-art-template')); 
app.use(parser.urlencoded({ extended: false }));

// 统一处理静态资源
app.use('/public',express.static('./public'));
app.use('/node_modules',express.static('./node_modules'));



// 渲染页面
app.use(router);


// 4 app.listen
app.listen(12345,()=>{
    console.log('success-----------');
})