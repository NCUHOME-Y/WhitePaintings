import React, { useState } from 'react';
import add from "../../images/start.png"
import { AddItem } from '../addItem';
import { AddTodo } from '../addTodo';
import { Footer } from '../footer';
import './style.css'
export const Focus = (props) => {
    const [isAdd, setIsAdd] = useState(false)
    const Home = () => {
        return (<div>
            <div className="todoTitle">
                <div className='titleContent'>
                    <span>专注事项</span>
                    <i className='addIcon'></i>
                </div>
            </div>
            {/* <div id="todoList">
                {props.todoList.map(() => <AddItem />)}
            </div> */}
            <Footer />
        </div>)
    }
    return (
        <div>
            {isAdd ? <AddTodo /> : <Home />}
        </div>

    )
}
