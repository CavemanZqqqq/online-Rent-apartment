import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { delUserAction, setUserAction} from '../../store/action/actions';
import './index.less'

function Login(props) {
    //创建ref： 获取dom元素
    let myRef = useRef();

    function login(){
        //获取用户名
       let val = myRef.current.value;
        //用户名存入仓库
       props.setUser(val)
        //将用户信息存入redux(token,用户名,islogin)

        //本地持久化
        localStorage.setItem('username',val)

        //返回上一页
        props.history.goBack()
    }

  return (
    <div>
        {/* 背景 */}
        <div className="login-bg">
            <img src="" alt="" />
        </div>

        {/* 登录窗口 */}
        <div className="login-box">
            <div>
                {/* 非受控组件 */}
                <input type="text" ref={myRef} placeholder='请输入用户名'  className="inp"/>
            </div>
            <div>
                <input type="password" placeholder='请输入密码'  className="inp"/>
            </div>
            <button onClick={login}>登录</button>
        </div>

    </div>
  )
}

export default connect(null,dispatch=>({
    setUser:(username)=>{dispatch(setUserAction(username))}
}))(Login)
