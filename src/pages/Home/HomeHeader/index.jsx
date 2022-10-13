import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import MyInput from '../../../component/MyInput'
import './index.less'

export default function HomeHeader(props) {
  return (
    <div className='home-header'>
        {/* 左侧 */}
            <div className="address">
                <NavLink className='city' color={'#000000'} to={'/city'} >
                    {props.cityName}
                    <i className='iconfont icon-jiantouxia' ></i>
                </NavLink>
            </div>
        {/* 中间搜索 */}
        <div className="search">
            <MyInput/>
        </div>

        {/* 右侧 */}
        <div className="cart">
            <Link to={'/cart'}>
                <i className='iconfont icon-gouwuche2'></i>
            </Link>
        </div>
    </div>
  )
}

