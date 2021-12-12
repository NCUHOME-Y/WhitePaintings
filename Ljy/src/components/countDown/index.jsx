import React, { useState } from 'react';
import { Footer } from '../footer';
import stop from "../../images/stop.png"
import board from "../../images/board.png"
import "./style.css"

var maxtime = 25 * 60;
export const CountDownTime = () => {
    if (maxtime >= 0) {
        var hours = Math.floor(maxtime / 3600);
        var minutes = Math.floor(maxtime / 60);
        var seconds = Math.floor(maxtime % 60);
        var msg = "0" + hours + ":" + minutes + ":" + seconds;
        if (maxtime == 5 * 60) alert("还剩5分钟");
        --maxtime;
        console.log(msg);
        return (msg);

    } else {
        clearInterval(timer);
        alert("时间到，结束!");
    }
}
var timer = setInterval(CountDownTime, 1000);


export const CountDown = (params) => {
    // const [time, setTime] = useState(<CountDownTime />)
    // setTime(setInterval(CountDownTime, 1000))
    // console.log(time)
    return (
        <div className='cntBg'>
            <div className="countDownTitle">
                <h3>写高数作业</h3>
                <div className='time'>
                    <h3><CountDownTime /></h3>
                    <img alt='' src={stop} width="50px" height="50px" />
                </div>
            </div>
            <img alt='' className='board' src={board} height={470} />
            <Footer />
        </div>
    )
}
