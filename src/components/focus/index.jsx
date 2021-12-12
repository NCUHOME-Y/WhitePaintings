import React, { useState } from 'react';
import { AddItem } from '../addItem';
import { AddTodo } from '../addTodo';
import { Footer } from '../footer';
import './style.css'
let nextId = 0;
export const Focus = () => {
    const [inputValue, setInputValue] = useState('test');
    const [todoList, setTodoList] = useState([{
        value: "xiaoliu",
        id: 0
    }, {
        value: "rao",
        id: 0
    }])
    const [isAdd, setIsAdd] = useState(false)
    const handleSubmit = (value) => {
        // alert(value)
        setInputValue(value)
        setIsAdd(!isAdd)
        setTodoList([...todoList, { value: inputValue, id: nextId }])
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
                    {todoList.map(todoItem => <AddItem content={todoItem.value} />)}
                </div>
            </main>
            <Footer />
        </div>)
    }
    return (
        <div>
            {isAdd ? <AddTodo handleSubmit={handleSubmit} /> : <Home />}
        </div>
    )
}
