import {combineReducers} from 'redux'

import city from './city'
import user from './uers'


//合并并导出reducer
export default combineReducers({
    city,
    user,
})