import React from 'react';
import { Link } from 'react-router-dom';
import add from "../../images/add.png"

import "./style.css"

export const AddItem = ({ content }) => {
    return (
        <div className="todoItem">
            <div className='todoItem-content'>{content}</div>
            <span>25分钟</span>
            <Link to='/countdown'><i></i></Link>
        </div>)
}
