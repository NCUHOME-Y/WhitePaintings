import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Focus } from "./components/focus"
import { User } from "./components/user"
import { AddTodo } from "./components/addTodo"
import CountDown from "./components/countDown"
import { SystemMsg } from './components/systemMsg';
import { Finish } from './components/finish';
import Community from './components/Community/Community'
import { UserChange } from './components/userChange';

export const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Focus} />
                    <Route path="/user" component={User} />
                    <Route path='/club' component={Community} />
                    {/* <Route path="/additem" render={() => (<AddTodo onChange={handleChange} onClick={handleClick} value={inputValue} />)} /> */}
                    <Route path="/countdown" render={() => (<CountDown duration={1500} />)} />
                    <Route path='/message' component={SystemMsg} />
                    {/* <Route path="/" component={ } /> */}
                    <Route path='/finish' component={Finish} />
                    <Route path='/userchange' component={UserChange} />
                </Switch>
            </Router>
        </div>
    )
}
// render={() => (<Focus todoList={todoList} />)}
