import React from 'react'
import {useHistory, withRouter} from 'react-router-dom'
 
import './index.less'


function CityHeader(props) {

  console.log(props);

  let history = useHistory();

  function back(){
    history.goBack();
    /*
      方法1. 使用 withRouter
      props.history.goBack();
      export default withRouter(CityHeader)
    */ 
  }

  return (
    <div className='city-header'>
      <i className='iconfont icon-zuojiantou' onClick={back}></i>
      <div className='title'>
        城市选择
      </div>
    </div>
  )
}

export default withRouter(CityHeader)