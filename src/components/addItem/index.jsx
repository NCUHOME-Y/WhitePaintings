import React from 'react';
import { Link } from 'react-router-dom';
import add from "../../images/add.png"

import "./style.css"

export const AddItem = (props) => {
    return (
        <div className="todoItem">
            <div className='todoItem-content'>{props.content}</div>
            <span>25分钟</span>
            <Link to='/countdown'><i></i></Link>
        </div>)
}
