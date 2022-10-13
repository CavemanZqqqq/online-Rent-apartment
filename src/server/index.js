const express =  require('express')

// 导入路由
const router = require('./router')
//创建服务器
const app = express();

//启动路由
app.use('/',router);

//post 请求
app.use(express.urlencoded({extended:true}))


//启动服务器
app.listen('7788',() =>{
    console.log("服务器启动成功。。。")
    console.log('http://localhost:7788')
})