import React, { Component } from 'react'
import InstantMessage from './InstantMessage/InstantMessage'
import Rankinglist from './Rankinglist/Rankinglist'
import "./Community.css"

export default class Community extends Component {
    //初始化状态 
    state = {
        page:"小憩",
        messages:[
            {id:"1",username:"还没想好名字",message:"写代码好累。",time:"十二分钟前"},
            {id:"002",username:"许锦鹏",message:"许锦鹏在12月07日完成专注5小时",time:"十二分钟前"},
        ],
        rank:[
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
            {id:"1",username:"还没想好名字",Totaltime:"16:25:00"},
        ]
        
    }
    //选着渲染页面
    chosePage = (page)=>{
        const {messages,rank} = this.state
        if(page=="小憩"){
            return <InstantMessage messages={messages}/>
        }else if(page=="排行榜"){
            return <Rankinglist rank={rank}/>
        }
    }
    //切换到《小憩》页面
    changePageToXQ = ()=>{
        this.setState({page:"小憩"})
    }
    //切换到《排行榜》页面
    changePageToRANKING = ()=>{
        this.setState({page:"排行榜"})
    }
    render(){
        //获取状态 
        const {page} = this.state
        return(
            <div className="App">
                <div className="title">
                    <a href="#" className='XQ' onClick={this.changePageToXQ}>小憩</a>
                    <a href="#" onClick={this.changePageToRANKING}>专注排行榜</a>
                </div>
                {this.chosePage(page)}
            </div>
        )
    }
}
