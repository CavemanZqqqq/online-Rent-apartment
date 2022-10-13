import React from 'react'

import Item from 'antd/lib/list/Item';
import { Rate } from 'antd';
import './index.less'

export default function Comment(props) {
  
  console.log(props.clist.info);

  return (
    <div className='comment-list'>
      {
        props.clist.info.map(item=>{
          return (
            <div className='comment-item' key={item.id}>
              <p>电话：{item.tel}</p>
              <div>评价：--{item.star}-- <Rate disabled defaultValue={item.star} />;</div>
              <p>详情：{item.content}</p>
            </div>
          )
        })
      }
    </div>
  )
}
