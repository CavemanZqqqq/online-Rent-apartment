import React, { useState } from "react";

import Comment from "./../Comment";

import "./index.less";

export default function CartList(props) {
  //const [isShow, setShow] = useState(false);

//   让评论框显示的标识
    const [currentId,setCurrentId] = useState(0);

  function goComment(id) {
    setCurrentId(id)
  }

  return (
    <div className="cart-list">
      {props.list.map((item,index) => {
        return (
          <div className="outer" key={item.id}>
            <div className="cart-item">
              {/* 图片 */}
              <img className="cart-img" src={item.imgUrl} alt="" />
              {/* 房屋基本信息   */}
              <div className="cart-info">
                <div>标题: {item.title}</div>
                <div>户型: {item.huxing}</div>
                <div>价格: {item.area}</div>
              </div>

              {/* 评论 */}
              <div className="comment-btn">
                {item.iscommit ? (
                  <div className="gray">已评论</div>
                ) : (
                  <div onClick={goComment.bind(null,item.id)}>评论</div>
                )}
              </div>
            </div>
            {/* 评论区 */}
            {
              currentId === item.id ?
              <Comment changeCurrent={goComment} index={index}/> :
              ``
            }
          </div>
        );
      })}
    </div>
  );
}
