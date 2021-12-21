import React from 'react';
import reBtnR from '../../images/retBtnR.png'
import retBtn from '../../images/retBtn.png'
import './style.css'
import { Link } from 'react-router-dom';

export const UserChange = (params) => {
    return (
        <div className='UCBox'>
            <div className='UCTitle'><Link to='/user'><img alt='' src={retBtn} width={30} height={30} /></Link></div>
            <ul className='UCList'>
                <li>修改用户名 <img alt='' src={reBtnR} width={20} /></li>
                <li>修改头像 <img alt='' src={reBtnR} width={20} /></li>
            </ul>
        </div>
    )
}
