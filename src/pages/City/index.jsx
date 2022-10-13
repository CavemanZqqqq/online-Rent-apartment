import Item from 'antd/lib/list/Item'
import React, { useEffect, useState } from 'react'
import { getHotCity } from '../../api'
import { connect } from 'react-redux'

// import CityHeader from './CityHeader'
import './index.less'
import { SET_CITY } from '../../store/action/action-type'
import { setCityAction } from '../../store/action/actions'
import CommonHeader from '../../component/CommonHeader'

function City(props) {

  let [city,setCity] = useState([])

  useEffect(()=>{
    getCity()
  },[])


  //获取城市
  async function getCity(){
    try{
      const res = await getHotCity();
      setCity(res.data.hotcity)
    } catch (error){
      console.log(error);
    }
  }


  function selectCity(name) {
    // 存到redux中
    props.setCity(name);
    //跳转页面
    props.history.goBack();
    // 持久化
    localStorage.setItem('city',name)
  }


  return (
    <div>
      {/* 投步 */}
      <CommonHeader>城市选择</CommonHeader>
      {/* 当前城市 */}
      <div className="city-box">
        <div className="city-title">
          当前城市
        </div>
        <div className="city-name">
          {props.cityName}
        </div>

      </div>

      <div className="city-box">
        <div className="city-title">
          热门城市
        </div>
        {
          city.map(item => {
            return(
              <div className="city-name" key={item.id} onClick={selectCity.bind(null,item.name)}>
                {item.name}
              </div>
            )
          })
        }
      </div>
      
    </div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  return {  
    setCity:(name)=>{dispatch(setCityAction(name))}
  }
}

export default connect(state=>({
    cityName : state.city
}),mapDispatchToProps)(City)
