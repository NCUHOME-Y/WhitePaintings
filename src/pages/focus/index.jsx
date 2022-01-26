import React, { useState, useEffect } from 'react';
import { AddItem } from './components/addItem';
import { AddTodo } from './components/addTodo';
import { Footer } from '../../components/footer';
import './style.css'
let nextId = 0;
export const Focus = () => {
    const [isAdd, setIsAdd] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList') || "[]"))
    const handleChange = (e) => {
        console.log(e)
        setInputValue(e.target.value)
        console.log(inputValue)
    }
    const hanldeClick = () => {
        setIsAdd(!isAdd)
        setTodoList(
            [...todoList,
            {
                id: ++nextId,
                content: inputValue,
                done: false
            }]
        )
        console.log(todoList)
    }
    useEffect(
        () => {
            localStorage.setItem('todoList', JSON.stringify(todoList));
            return () => console.log(123);
        }, [todoList]
    );
    const Home = () => {
        return (<div className='focusContainer'>
            <div className="todoTitle">
                <div className='titleContent'>
                    <span>专注事项</span>
                    <i className='addIcon' onClick={() => setIsAdd(!isAdd)}></i>
                </div>
            </div>
            <main>
                <div className='todoItems'>
                    {todoList.map(todoItem => <AddItem key={todoItem.id} content={todoItem.content} />)}
                </div>
            </main>
            <Footer />
        </div>)
    }
    return (
        <div>
            {isAdd ? <AddTodo hanldeClick={hanldeClick} handleChange={handleChange} value={inputValue} /> : <Home />}
        </div>
    )
}
