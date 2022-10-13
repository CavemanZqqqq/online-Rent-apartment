import React from 'react'
import style from './House.module.less'

export default function SearchList(props) {
  //console.log(props)
  return (
    <div className={style.house}>
      <h3 className={style.title}></h3>
      <ul className={style.list}>
        {props.list.map((item) => {
          return (
            <li className={style.item} key={item.id}>
              <img src={item.imgUrl} alt="" height={200} width={"100%"} />
              <div className={style.info}>
                <div className={style.desc}>
                  <div>{item.title}</div>
                  <div>{item.huxing} 楼层： {item.floor} 面积：{item.area} m</div>
                </div>
                <div className={style.type}>
                  <div className={style.zu}>{item.type}</div>
                  <div className={style.price}>{item.price}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
