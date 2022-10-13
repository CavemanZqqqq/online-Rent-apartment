import React, { useContext } from "react";

import { Input } from "antd";
import { Rate } from "antd";

import { useState } from "react";

import Mycontext from "../Cart/Mycontext";

const { TextArea } = Input;

export default function Comment(props) {
  const [txt, setTxt] = useState("");
  const [score, setScore] = useState(0);

  // 获取评分
  function getVal(val) {
    console.log(val);
    setScore(val);
  }

  const value = useContext(Mycontext);

  //提交
  function submit() {
    //1.获取输入内容， 打分， ==》 后台
    console.log(txt, score);
    if (txt !== "" && score > 0) {
      //2. 请求后端 ===> 修改iscommit ===> 渲染页面
      //3. 添加评论成功了， （1）评论 ==> 已评论 （通知父组件重新请求数据） （2）隐藏评论区

      props.changeCurrent(0);

      value.changeIsCommit(props.index)

    } else {
      alert("请输入正确内容");
    }
  }

  return (
    <div style={{ padding: "0.2rem" }}>
      {/* 文本 */}
      <>
        <TextArea
          rows={2}
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
        <br />
        <br />
      </>
      {/* 评分 */}
      <>
        评分：
        <Rate
          allowClear={false}
          value={score}
          onChange={getVal}
          defaultValue={3}
        />
      </>
      {/* 按钮 */}
      <div>
        <button onClick={submit}>提交</button>
        <button>取消</button>
      </div>
    </div>
  );
}
