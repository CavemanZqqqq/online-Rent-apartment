/*
reducer
1.初始化数据
2.分支判断，处理数据
3.返回新状态
*/

import {DEL_USER, SET_USER} from '../action/action-type'



function user(prevState = {username:'',token:''},action){
    let {type,payload} = action;
    let newState = {...prevState};
    switch (type) {
        case SET_USER:
            newState.username=payload
            return newState;
        
        case DEL_USER:
            newState = '';
            return newState
        
        default:
            return newState;
    }
}

export default user;