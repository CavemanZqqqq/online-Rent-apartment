import React from 'react';
import ReactDOM from 'react-dom';
//链接redux（store）和 component
import { Provider } from 'react-redux';



//引入仓库
import store from './store'

//初始化样式
import './asset/css/reset.css'

import AppRouter from './router/AppRouter';
import { setCityAction, setUserAction } from './store/action/actions';

//从本地存储里取

if(localStorage.getItem('city')) {
    store.dispatch(setCityAction(localStorage.getItem('city')));
}

if(localStorage.getItem('username')) {
    store.dispatch(setUserAction(localStorage.getItem('username')));
}


ReactDOM.render(

<Provider store={store}>

<AppRouter/>

</Provider>
,document.getElementById('root'))

