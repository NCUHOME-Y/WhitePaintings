import React from 'react';
import { Footer } from '../footer';
import stop from "../../images/stop.png"
import board from "../../images/board.png"

export const CountDown = (params) => {
    return (
        <div>
            <div id="countDownTitle">
                <h3>写高数作业</h3>
                <h3>time</h3>
                <img alt='' src={stop} />
            </div>
            <img alt='' src={board} />
            <Footer />
        </div>
    )
}
