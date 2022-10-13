import React from 'react'
import {useHistory, withRouter} from 'react-router-dom'
 
import './index.less'


export default function CommonHeader(props) {

  //console.log(props);

  let history = useHistory();

  function back(){
    history.goBack();
  }

  return (
    <div className='city-header'>
      <i className='iconfont icon-zuojiantou' onClick={back}></i>
      <div className='title'>
        {/* 预留空间 */}
        {props.children}
      </div>
    </div>
  )
}
