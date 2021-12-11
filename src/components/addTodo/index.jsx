import React, { useState } from 'react';
import retBtn from '../../images/retBtn.png'
export const AddTodo = ({ handleSubmit }) => {
    const [value, setValue] = useState("")
    return (
        <div>
            <div id="addTitle">
                <img alt="" src={retBtn} />
                <h6>添加事项</h6>
                <button onClick={() => handleSubmit(value)}>完成</button>
            </div>
            <div id="addValue">
                <h5>任务名称</h5>
                <input onChange={(e) => setValue(e.target.value)} value={value} />
                <h5>专注时间</h5>
                <select>
                    <option>25分钟</option>
                    <option>50分钟</option>
                    <option>75分钟</option>
                </select>
            </div>
        </div>
    )
}
