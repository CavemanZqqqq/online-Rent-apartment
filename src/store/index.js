//创建仓库
import {applyMiddleware, createStore} from 'redux'

//导出reducers
import rootReducer from './reducers'

//引用日志
import logger from 'redux-logger'

//导出仓库
export default createStore(rootReducer,applyMiddleware(logger));