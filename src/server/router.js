const express = require('express')
const { Random } = require('Mockjs')
const router = express.Router()
var Mock = require('Mockjs')
const {v4} = require('uuid')


const citys = require('./data/hotcity.json')


//测试接口
router.get('/',(req,res)=>{
    res.send('测试成功')
})

//测试
router.get('/mock',(req,res)=>{
    const data = Mock.mock({
        
        'list|10':[
            {
                'id|+1':1,
                'title':'@cword(3,8)',
                'huxing|1':['一室一厅','三室两厅','两室一厅']
            }
        ]
        

    })
    res.send(data)
})

//获取首页轮播图
router.get('/banner',(req,res)=>{
    const data = Mock.mock({
        status:200,
        'banner|3':[{
            'id|+1':1,
            'imgUrl|+1':[
                'http://iwenwiki.com/api/livable/banner/banner1.png',
                'http://iwenwiki.com/api/livable/banner/banner2.png',
                'http://iwenwiki.com/api/livable/banner/banner3.png'
            ]
        }]
    })
    res.send(data);
})

//热门房源接口
//参数：{city: '北京'}
router.get('/hothouse',(req,res)=>{
    let city = req.query.city || '北京';
    res.send(Mock.mock(
        {
            status:200,
            'list|5':[
                {
                    'id|+1':1,
                    address:city+'-@cword(3,8)',
                    'huxing|1':['一室一厅','两室一厅','三室两厅','四室一厅'],
                    'type|1':['整租','合租'],
                    'price|2000-10000':1,
                    'imgUrl|+1':["http://iwenwiki.com/api/livable/search/1.jpg",
                                 "http://iwenwiki.com/api/livable/search/2.JPG",
                                 "http://iwenwiki.com/api/livable/search/3.jpg",
                                 "http://iwenwiki.com/api/livable/search/4.JPG",
                                 "http://iwenwiki.com/api/livable/search/5.jpg"
                    ],
                    'area|50-120.2':1
                }
            ]

        }
    ))
})

//请求热门城市

router.get('/selectcity',(req,res)=>{
    res.send({
        status:200,
        data:citys
    })
})

//请求搜素列表
router.get('/search',(req,res)=>{
    let {city, val ,page} = req.query;
    res.send(Mock.mock({
        status:200,
        success: true,
        nextPage: page + 1,
        'list|10':[{
            'imgUrl|1':[
                "http://iwenwiki.com/api/livable/search/1.jpg",
                "http://iwenwiki.com/api/livable/search/2.JPG",
                "http://iwenwiki.com/api/livable/search/3.jpg",
                "http://iwenwiki.com/api/livable/search/4.JPG",
                "http://iwenwiki.com/api/livable/search/5.jpg",
                "http://iwenwiki.com/api/livable/search/6.jpg",
                "http://iwenwiki.com/api/livable/search/6.jpg",
                "http://iwenwiki.com/api/livable/search/6.jpg",
                "http://iwenwiki.com/api/livable/search/6.jpg",
                "http://iwenwiki.com/api/livable/search/6.jpg"
             
            ],
            id:function(){
                return v4();
            },
            title: city + val + '- @cword(5,8)',// 房源信息
            'total|6-30': 1,//总楼层
            'current|1-30':1,//当前楼层
            floor: function () {
                if (this.total >= this.current) {
                    return `${this.current}/${this.total}`
                } else {
                    return `${this.total}/${this.current}`
                }
            },
            'huxing|1': ['一室一厅','两室一厅','三室两厅'],
            'area|40-240':1,
            'type|1':['整租','合租'],
            'price|3000-100000':2000
        }]
    }))
})

//房屋详情
router.get('/houseinfo',(req,res)=>{
    let id = req.query.id;
    res.send(Mock.mock({
        status:200,
        success:true,
        id,
        info:{
            title:'@cword(5,10)',
            'price|3000-10000':1,
            'huxing|1':['一室一厅','两室一厅','三室两厅'],
            'area|60-150.2':1,
            'zong|6-32':1,
            'cur|1-32':1,
            floor: function(){
                if (this.zong < this.cur) {
                    return this.zong + '/' +this.cur
                } else {
                    return this.cur + '/' + this.zong
                }
            },
            'zhuangxiu|1':['精装','简装','毛胚'],
            'banner|4':[{
                'id|+1':1001,
                'imgUrl|+1':[
                    'http://iwenwiki.com/api/livable/banner/banner1.png',
                    'http://iwenwiki.com/api/livable/banner/banner2.png',
                    'http://iwenwiki.com/api/livable/banner/banner3.png',
                    'http://iwenwiki.com/api/livable/banner/banner1.png',
                    'http://iwenwiki.com/api/livable/banner/banner2.png',
                    'http://iwenwiki.com/api/livable/banner/banner3.png'
                ]
            }]
        }
    }))
})


//房屋评论详情
router.get('/commentinfo',(req,res)=>{
    let id = req.query.id;
    res.send(Mock.mock({
        status:200,
        success:true,
        id,
        'info|5':
        [
            {
            'id|+1':function(){
                return v4();
            },
            'tel': /1\d{10}/,
            content:'@cword(20,60)',
            'star|1-5':1
            }
        ]   
    }))
})


//购物车列表
router.get('/cart',(req,res)=>{
    let user = req.query.user;
    res.send(Mock.mock({
        success:true,
        user,
        'list|6':[
            {
                id:function(){
                    return v4();
                },
                title:'@cword(5,7)',
                'price|2000-20000':1,
                'huxing|1':['一室一厅','两室一厅','三室两厅'],
                'area|60-150.2':1,
                'iscommit|3-7':true,//30%true
                'imgUrl|+1':[
                    'http://iwenwiki.com/api/livable/banner/banner1.png',
                    'http://iwenwiki.com/api/livable/banner/banner2.png',
                    'http://iwenwiki.com/api/livable/banner/banner3.png',
                    'http://iwenwiki.com/api/livable/banner/banner1.png',
                    'http://iwenwiki.com/api/livable/banner/banner2.png',
                    'http://iwenwiki.com/api/livable/banner/banner3.png'
                ]
            }
        ]
    }))
})






module.exports=router