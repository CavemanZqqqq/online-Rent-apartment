import { Carousel, Image} from 'antd';
import React, { useEffect } from 'react';
// 引入样式库！！！！！！！
import 'antd/dist/antd.min.css';


const contentStyle = {
  height: '130',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function MyCarousel(props) {

  return (
    
   
  <div style={{height : '10rem'}}>
   <Carousel autoplay>
    {
      
      props.list.map((item,index) => {
          return (<div key={item.id}>
              <Image
                  width={'100%'}
                  src={item.imgUrl}
              />
          </div>
          )
      })
    }
  </Carousel>
 
  </div>
    

  )
}
