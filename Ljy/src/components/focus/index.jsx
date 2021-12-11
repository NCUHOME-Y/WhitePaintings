import React, { useState } from 'react';
import { AddItem } from '../addItem';
import { AddTodo } from '../addTodo';
import { Footer } from '../footer';
import './style.css'
export const Focus = (props) => {
    const [isAdd, setIsAdd] = useState(false)

    const handleSubmit = (value) => {
        alert(value)
        setIsAdd(!isAdd)
    }

    const Home = () => {
        return (<div>
            <div className="todoTitle">
                <div className='titleContent'>
                    <span>专注事项</span>
                    <i className='addIcon' onClick={() => setIsAdd(!isAdd)}></i>
                </div>
            </div>
            <main>
                <div className='todoItems'>
                    {props.todoList.map(todoItem => <AddItem content={todoItem.value} />)}
                </div>
            </main>
            {/* <div id="todoList">
                {props.todoList.map(() => <AddItem />)}
            </div> */}
            <Footer />
        </div>)
    }
    return (
        <div>
            {isAdd ? <AddTodo handleSubmit={handleSubmit} /> : <Home />}
        </div>

    )
}
