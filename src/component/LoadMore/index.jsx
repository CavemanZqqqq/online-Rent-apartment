import React, { useEffect, useRef } from 'react'

export default function LoadMore(props) {

  // 定义ref
  let myref = useRef();
  let flag = true;

  // 生命周期
  useEffect(()=>{
    // 窗口高度
    let winHeight = document.documentElement.clientHeight;
    // 滚动事件
    window.addEventListener('scroll',scrollFn);

    function scrollFn(){
      // DOM元素的到顶部的高度
      let divHeight = myref.current.offsetTop;
      // 被卷去的高度
      let scrTop = document.documentElement.scrollTop;
      
      if (scrTop + winHeight >= divHeight && flag) {
        console.log('--------loading')
        flag = false
        // 请求下一页数据,状态提升
        props.load(props.pageNum);
      }
    }
  },[])




  return (
    <div ref={myref}>
      加载更多
    </div>

  )
}
