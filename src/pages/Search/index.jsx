import React, { useEffect, useState } from 'react'
import { getSearch } from '../../api'
import CommonHeader from '../../component/CommonHeader'
import MyInput from '../../component/MyInput'
import { connect } from 'react-redux'
import SearchList from './SearchList'
import LoadMore from '../../component/LoadMore'

function Search(props) {

    const [list,setList] = useState([]);
    const [pageNum,setPageNum] = useState(0);

    useEffect(()=>{
        getSearchList(0)

        
    },[props.city,props.match.params.val])

    async function getSearchList(num){
        try{
            const res = await getSearch({city:props.city,val:props.match.params.val,page:num})
            
            setList([...list,...res.list])
            //console.log(list)
            setPageNum(pageNum + 1)
        } catch(error) {
            console.log(error)
        }
        
    }




  return (
    <div>
        {/* 公共头部 */}
        <CommonHeader>
            <MyInput val = {props.match.params.val}/>
        </CommonHeader>
        {/* 搜索列表 */}
        <SearchList list={list}/>
        {/* 加载更多 */}
        <LoadMore pageNum = {pageNum} load={getSearchList}/>
    </div>
  )
}

export default connect(state=>({
    city:state.city
}))(Search)
