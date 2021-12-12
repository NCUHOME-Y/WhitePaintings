import React from 'react';
import retBtn from '../../images/retBtn.png'
import './style.css'
import pic from '../../images/pic.png'

export const Finish = () => {
    return (
        <div className='finishBg'>
            <div className='finishBox'>
                <img alt="" src={retBtn} width="30px" height="30px" className='btn' />
                <div className='finishValue'>
                    <h4>已完成！</h4>
                    <p>写高数练习作业</p>
                </div>
                <div className='engBox'>
                    <img alt='' src={pic} width={244} height={290} />
                    <p className='eng'>不积小流。</p>
                </div>
                <button>立即分享</button>


            </div>
        </div>
    )
}
