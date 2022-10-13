import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.less'


export default function index() {
  return (
    <div className='nav'>
        <div className="item">
            <NavLink exact activeStyle={{color:'#ff5555'}} to={'/'}>
                <i　className='iconfont icon-shouye'></i>
                首页
            </NavLink>
        </div>
        <div className="item">
            <NavLink activeStyle={{color:'#ff5555'}} to={'/shop'}>
                <i　className='iconfont icon-shouye1'></i>
                商城
            </NavLink>
        </div>
        <div className="item">
            <NavLink activeStyle={{color:'#ff5555'}} to={'/life'}>
                <i　className='iconfont icon-icon'></i>
                生活
            </NavLink>
        </div>
        <div className="item">
            <NavLink activeStyle={{color:'#ff5555'}} to={'/mine'}>
                <i　className='iconfont icon-denglu'></i>
                我的
            </NavLink>
        </div>
    </div>
  )
}
