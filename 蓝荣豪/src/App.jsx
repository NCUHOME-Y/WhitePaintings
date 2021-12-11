import React, { Component } from 'react'
// import Loginlogon from './component/Loginlogon/Loginlogon'
import "./reset.css"
import Community from './component/Community/Community'

export default class App extends Component {
    //初始化数据
    state = {
        isOnline:true
    }
    changeisOnline = (onlineOK)=>{
        //改变状态
        this.setState({isOnline:onlineOK})
    }
    render(){
        return  <Community/>
    }
}
