import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Focus } from "./components/focus"
import { User } from "./components/user"
import { AddTodo } from "./components/addTodo"
import { CountDown } from "./components/countDown"
let nextId = 0;
export const App = () => {
    const [inputValue, setInputValue] = useState('test');
    const [todoList, setTodoList] = useState([{
        value: "xiaoliu",
        id: 0
    }, {
        value: "rao",
        id: 0
    }])
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleClick = () => {
        nextId++;
        setTodoList([...todoList, { value: inputValue, id: nextId }])
        inputValue = ""
    }

    return (
        <div>
            <Router>
                <Route path="/user" component={User} />
                {/* <Route path="/additem" render={() => (<AddTodo onChange={handleChange} onClick={handleClick} value={inputValue} />)} /> */}
                <Route path="/countdown" component={CountDown} />
                <Route path="/" exact render={() => (<Focus todoList={todoList} />)} />

                {/* <Route path="/" component={ } /> */}

            </Router>
        </div>
    )
}
