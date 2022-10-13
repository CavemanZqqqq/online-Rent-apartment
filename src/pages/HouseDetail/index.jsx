import React, { useEffect, useState } from "react";
import CommonHeader from "../../component/CommonHeader";
import MyCarousel from "../../component/MyCarousel";
import { Tabs } from "antd";

import "antd/dist/antd.min.css";
import './index.less'
import { getDetail,getComment} from "../../api";
import CommentList from './../../component/CommentList'
import { connect } from "react-redux";

function HouseDetail(props) {

  console.log(props);

  const [list,setList] = useState([])//轮播图
  const [info,setInfo] = useState([])//房屋信息
  const [clist,setClist] = useState([])//房屋评价
  const [isCollect,setCollect] = useState(false)//收藏



  useEffect(()=>{
    
    getHouseInfo()
    getCommentInfo()

    async function getHouseInfo(){
      try {
        const res = await getDetail({id:props.match.params.id})
        //console.log(res.info)
        setInfo(res.info)
        setList(res.info.banner)
      } catch(error) {
        console.log(error)
      }
    }

    async function getCommentInfo(){
      try {
        const res = await getComment({id:props.match.params.id})
        console.log(res)
        setClist(res)
        
      } catch(error) {
        console.log(error)
      }
    }

  },[])

  function toCollect(){
    //console.log(props.username);
    // 、判读是否登录
    if(props.username) {
      //已经登录
      setCollect(true);
    } else {
      // 没登录
      props.history.push('/login')
    }
  }



  return (
    <div>
      {/* 头部 */}
      <CommonHeader>详情页</CommonHeader>
      {/* 轮播图 */}
      <MyCarousel list={list}></MyCarousel>
      {/* 选项卡 */}
      <Tabs defaultActiveKey="1" centered tabBarGutter={100}>
        <Tabs.TabPane tab="房源信息" key="1">
          <div className="house-info">
            <div className="house-item">
                <p>{info.price}/月</p>
                租金
            </div>
            <div className="house-item">
                <p>{info.huxing}</p>
                户型
            </div>
            <div className="house-item">
                <p>{info.area}</p>
                面积
            </div>
          </div>
          <p>
            标题：{info.title}
          </p>
          <p>
            装修：{info.zhuangxiu}
          </p>
          <p>
            楼层：{info.floor}
          </p>



        </Tabs.TabPane>
        <Tabs.TabPane tab="评价信息" key="2">
          <CommentList clist={clist}></CommentList>
        </Tabs.TabPane>
      </Tabs>

      {/* 底部收藏 */}
      <div className="house-bottom">
        <div className="house-detail">
            <div onClick={toCollect}>
              {
                isCollect ? '已收藏':'收藏'
              }
            </div>
            <div>购买</div>
        </div>
      </div>
    </div>
  );
}

export default connect(state=>({
  username:state.user.username
}))(HouseDetail)
