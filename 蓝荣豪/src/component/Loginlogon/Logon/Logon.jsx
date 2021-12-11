import React, { Component } from 'react'
import {sha256_digest} from '../sha256'

export default class Logon extends Component {
    //注册的回调
    handleLogon = ()=>{
        var username = document.getElementById("username").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        password = sha256_digest(password+"whitepainting123")
        console.log(username,email,password);
        //向后端发送注册请求
        var xhr = new XMLHttpRequest();
        xhr.open("post","https://www.errequalsnil.top/passport/register",true)
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.send("username="+username+"&password="+password+"&email="+email);
        xhr.onreadystatechange = function(){
        console.log("1");
            if(xhr.readyState===4 && xhr.status===200){
                var date = xhr.responseText;
                console.log(xhr.responseText)
            }
        }
        console.log(xhr.responseText)
    }
    render(){
        return(
            <div className="logon">
                <h1>注册</h1>
                <h1>用户名</h1>
                <input type="text" id="username"/>
                <br/>
                <h1>邮箱</h1>
                <input type="text" id="email"/>
                <br/>
                <h1>密码</h1>
                <input type="password" id="password"/>
                <br/>
                <button id="logonBtn" onClick={this.handleLogon}>注册</button>
                <button id="logonBacktologin" onClick={this.props.updateLogonNow}>返回</button>
            </div>
        )
    }
        
}

