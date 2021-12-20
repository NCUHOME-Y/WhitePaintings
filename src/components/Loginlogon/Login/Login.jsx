import React, { Component } from 'react'
import { sha256_digest } from '../sha256'
import axios from 'axios'
import paper from '../../../images/paper.png'
import { withRouter } from 'react-router-dom'

class Login extends Component {
    handleLogin = () => {
        //向后端发送请求
        var username = document.getElementById("loginusername").value
        var password = document.getElementById("loginpassword").value
        password = sha256_digest(password + "whitepainting123")
        console.log(username, password);
        //使用axios向后端发送登录请求
        axios.post(
            "https://www.errequalsnil.top/passport/login",
            "username="+username+"&password="+password
        ).then(response => {
            console.log(response);
            this.props.history.push('/index')
        })
    }

    render() {
        return (
            //整个登录页面框
            <div className="login">
                {/*登录页面顶部的标题*/}
                <div className='title'>
                    <span>White</span>
                    <span>Painting</span>
                </div>
                <div className='loginInput'>
                    <h2 className='titleusername'>用户名</h2>
                    <input id='loginusername' className='inputusername' type="text" />
                    <h2 className='titlepassword'>密码</h2>
                    <input id='loginpassword' className='inputpassword' type="text" />
                </div>
                <button className="loginBtn" onClick={this.handleLogin}>登录</button>
                <div className='logonbox'>
                    <span>没有账号？</span>
                    <a href="#" onClick={this.props.updateLogonNow}>马上注册</a>
                </div>
                {/* <div className='bottomword'>
                </div> */}
                <img alt='' src={paper} className='paper' />
            </div>
        )
    }
}

export default withRouter(Login)


