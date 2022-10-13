/*
reducer
1.初始化数据
2.分支判断，处理数据
3.返回新状态
*/
import { SET_CITY } from "../action/action-type";

 

function city(prevState = '上海',action){
    let {type,payload} = action;
    let newState = prevState;

    switch (type) {
        case SET_CITY:
            newState = payload;
            return newState;
        
        default:
            return newState;   
    }
}

export default city;