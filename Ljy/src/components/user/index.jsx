import React from 'react';
import head from '../../images/head.png'
import { Footer } from '../footer';
import reBtnR from '../../images/retBtnR.png'
import "./style.css"
import { Link } from 'react-router-dom';
export const User = (params) => {
    return (
        <div className='userBox'>
            <div className="userTitel">
                <img className="userHead" alt='' src={head} />
                <h6>还没想好用户名</h6>
            </div>
            <ul className="userList">
                <Link to='/message'><li>系统消息 <img alt='' src={reBtnR} /></li></Link>
                <li>我的专注分享 <img alt='' src={reBtnR} /></li>
                <li>详细专注数据 <img alt='' src={reBtnR} /></li>
                <Link to='/userchange'><li>修改个人信息 <img alt='' src={reBtnR} /></li></Link>
            </ul>
            <Footer />
        </div>
    )
}
