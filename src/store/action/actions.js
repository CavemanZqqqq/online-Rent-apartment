/*
    导出所有action

*/ 
import { DEL_USER, SET_CITY, SET_USER } from "./action-type";

//设置当前城市
export const setCityAction= (name)=>({type:SET_CITY,payload:name})

//设置用户名
export const setUserAction = (name)=>({type:SET_USER,payload:name})

//删除用户名
export const delUserAction = ()=>({type:DEL_USER})

