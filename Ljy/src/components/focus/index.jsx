import React from 'react';
import add from "../../images/start.png"
export const Focus = () => {
    return (
        <div>
            <div id="todoTitle">
                <span>专注事项</span>
                <img alt="" src={add} />
            </div>
            <div id="todoList">

            </div>
            <Footer />
        </div>
    )
}
