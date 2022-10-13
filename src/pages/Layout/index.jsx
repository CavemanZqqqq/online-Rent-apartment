import React, { Component } from 'react'
import MyBottomNav from './../../component/MyBottomNav'
import './index.less'

export default class Layout extends Component {

  render() {
    return (
      <div>
        {/*  路由出口 */}
        <div className='content'>
            {   
                this.props.children
            }
        </div>
        {/* 公共底部 */}
    
        <div className="footer">
            <MyBottomNav/>
        </div>
      </div>
    )
  }
}


