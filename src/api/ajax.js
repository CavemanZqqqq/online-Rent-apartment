/*
对axios二次封装
1.配置通用的基础路径和超时
2.显示请求进度条
    显示进度条：请求拦截回调
    结束进度条：响应拦截回调
3.成功返回数据不再是response，而是响应数据体response.data
4.统一处理请求错误，具体请求也可以选择处理或者不处理
5.每个请求自动携带useTempleId的请求头：在请求拦截器中实现
6.如果当前token，自动携带token的请求头


*/

import Axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import qs from 'query-string'

const service = Axios.create({
    //1.配置基础路径，超时时间
    baseURL:'/api',
    timeout:5000
})

//2.请求拦截
service.interceptors.request.use(config=>{
    //console.log(config);
    //显示进度条
    nProgress.start();
    //加token值
    //config.headers.token = '11111';

    //post请求，对象转字符串
    if(config.method==='post') {
        config.data=qs.stringify(config.data)
    }

    return config;
})

//3.响应拦截
service.interceptors.response.use(res=>{
    //结束进度条
    nProgress.done();

    //错误判断500， 200

    return res.data;
},err=>{
    //!!!写成了promises 报错！！
    return Promise.reject(err);
})


export default service


