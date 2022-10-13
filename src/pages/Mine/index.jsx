import React from 'react'
import { connect } from 'react-redux'
import { delUserAction } from '../../store/action/actions'

function Mine(props) {

  //退出登录

  /*
  1. Rudux 删除username
  2. 删除本地存储
  3. 页面跳转
  
  */ 

  function loginOut(){
    //1.  Rudux 删除username
    props.delUser()
    //2. 删除本地存储
    localStorage.removeItem('username')
    //3. 页面跳转
    props.history.goBack()

  }

  return (
    <div>
      <div className="mine-header">
        {/* 头像 */}
        <i className='iconfont icon-denglu'></i>
      </div>
      <i className='iconfont icon-shezhi1'></i>

      <button onClick={loginOut}>退出登录</button>

    </div>
  )
}

export default connect(null,dispatch=>({
  delUser:()=>{dispatch(delUserAction())}
}))(Mine)