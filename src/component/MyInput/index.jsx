import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


const inputStyle = {
    height: '1.5rem',
    width: '100%',
    borderRadius: '0.3rem',
    paddingLeft: '0.2rem'
}

export default function MyInput(props) {
  const [val,setVal] = useState('')
  const history = useHistory()

  useEffect(()=>{
    if (props.val) {
      setVal(props.val)
    }
    
  },[props.val])


  //获取文本框的输入
  function getInput(e){
    setVal(e.target.value);
  }

  //获取键盘抬起事件
  function getKeyUp(e) {
    console.log(e.keyCode)
    if (e.keyCode === 13 && val) {
      // 回车,页面跳转,编程式路由导航跳转
      
      history.push('/search/' + val)

    }
  }

  return (
    <div>
        {/* 
            受控组件 
            功能：输入信息，回车，跳转页面
        */}
        <input value={val} onChange={getInput} type="text" style={inputStyle} placeholder='请输入内容' 
        onKeyUp={getKeyUp}/>
    </div>
  )
}
