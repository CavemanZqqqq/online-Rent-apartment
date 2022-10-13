// 封装所有的请求函数

import Axios from "./ajax";
import base from './base'

// const api={
//     toRegister(){
//         return Axios.get('/')
//     },
// }

// export default api

/*
    获取首页轮播图
    @returns [{id,imgUrl},{},{}]
*/
export const getBanner = () => Axios.get(base.banner)


/*
    首页轮播图列表
    @params{*} params
    @returns {city:'北京'}

*/

export const getHotHouse = (params) => Axios.get(base.hothouse,{params:params})

/*
    选择热门城市列表
    @return [{id,name},...]

*/ 

export const getHotCity = ()=> Axios.get(base.hotcity) 

/*
    @param: 当前城市， 搜素关键字， 请求页码
    @return:  [{}....]

*/
export const getSearch = (params)=> Axios.get(base.search,{params:params})

/*
    @param: id
    @return
*/

export const getDetail = (params)=> Axios.get(base.houseinfo,{params:params})

/*
    @param: id
    @return
*/

export const getComment = (params)=> Axios.get(base.comment,{params:params})

/*
    @param: user
    @return
*/ 
export const getCart = (params)=> Axios.get(base.cart,{params:params})


