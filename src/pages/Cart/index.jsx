import React, { useEffect, useState } from "react";
import { getCart } from "../../api";
import CommonHeader from "../../component/CommonHeader";
import { connect } from "react-redux";
import CartList from "../CartList";
import "./index.less";

import Mycontext from "./Mycontext";

function Cart(props) {
  //定义状态
  const [list, setList] = useState([]);

  //生命周期

  useEffect(() => {
    async function getCartList() {
      try {
        let res = await getCart({ user: props.username });
        setList(res.list);
      } catch (error) {
        console.log(error);
      }
    }
    getCartList();
  }, []);

  function changeIsCommit(index) {
    console.log("@@@",index)
    list[index].iscommit = true;
    setList(list);
  }

  //修改指定item 的评论状态 IsCommit list：[{},{isCommit:true},{},{}]

  return (
    <div>
      {/* 公共头部区域 */}
      <CommonHeader>购物车</CommonHeader>

      <Mycontext.Provider value={{changeIsCommit:changeIsCommit}}>
        {/* 列表渲染 */}

        <CartList list={list}></CartList>
      </Mycontext.Provider>
    </div>
  );
}

export default connect((state) => ({
  username: state.user.username,
}))(Cart);
