import React from 'react';
import file from "../../images/file.png"
import club from "../../images/club.png"
import my from "../../images/my.png"
import "./style.css"
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer">
            <Link to='/'> <i className='footer-focus'></i></Link>
            <Link to='/club'><i className='footer-home'></i></Link>
            <Link to='/user'> <i className='footer-user'></i></Link>
        </div>
    )
}
<i></i>