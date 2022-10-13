import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './../../pages/Home'
import Shop from './../../pages/Shop'
import Life from './../../pages/Life'
import Mine from './../../pages/Mine'
import Layout from './../../pages/Layout'
import City from './../../pages/City'
import Search from './../../pages/Search'
import HouseDetail from '../../pages/HouseDetail/index.jsx'
import Login from '../../pages/Login'
import Cart from '../../pages/Cart'

export default function AppRouter() {
  return (
    
    <Router>
        <Switch>
            {/* 城市选择列表 */}
            <Route path={'/city'} component={City}/>
            {/* 搜索 */}
            <Route path={'/search/:val'} component={Search}></Route>
            {/* 房屋详情 */}
            <Route path={'/detail/:id'} component={HouseDetail}></Route>
            {/* 登录 */}
            <Route path={'/login'} component={Login}></Route>
            {/* 购物车 */}
            <Route path={'/Cart'} component={Cart}/>

            <Layout>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/shop'} component={Shop}/>
                <Route path={'/life'} component={Life}/>
                <Route path={'/mine'} component={Mine}/>
            </Layout>
        </Switch>
    </Router>

    
  )
}
