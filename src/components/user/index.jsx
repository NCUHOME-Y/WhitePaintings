import React from 'react';
import head from '../../images/head.png'
export const User = (params) => {
    return (
        <div>
            <div id="userTitel">
                <img id="userHead" alt='' src={head} />
                <h6>还没想好用户名</h6>
            </div>
            <ul id="userList">
                <li>系统消息</li>
                <li>我的专注分享</li>
                <li>详细专注数据</li>
                <li>修改个人信息</li>
            </ul>
        </div>
    )
}
