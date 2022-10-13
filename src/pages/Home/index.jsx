import React, { useEffect, useState } from "react";
import HomeHeader from "./HomeHeader";
import MyCarousel from "./../../component/MyCarousel";
import { getBanner, getHotHouse } from "../../api";
import House from "./House";

import "./index.less";
import { connect } from "react-redux";

function Home(props) {
  //定义变量
  let [list, setList] = useState([]);
  let [house, setHouse] = useState([]);

  //在生命周期中请求数据 componentDidMount()函数组件：useEffect()第二个参数[]是DidMount，
  //不加DidMount和DidUpdate，
  //变量（变量改变就加请求）
  useEffect(() => {
    getBannerList();

    async function getBannerList() {
      try {
        const res = await getBanner();
        setList(res.banner);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  useEffect(() => {
    getHotHouseList();

    async function getHotHouseList() {
      try {
        const res = await getHotHouse({ city: props.city });
        setHouse(res.list);
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.city]);

  return (
    <div>
      {/* 头部区域 */}
      <HomeHeader cityName={props.city} />
      {/* 轮播图 */}
      <MyCarousel list={list} />

      {/* 招室友 */}
      <div className="nav">
        <div className="home-item">找舍友</div>
        <div className="home-item">宜居社区</div>
      </div>

      {/* 热门房源 */}
      <House list={house}></House>
    </div>
  );
}

export default connect((state) => ({
  city: state.city,
}))(Home);
