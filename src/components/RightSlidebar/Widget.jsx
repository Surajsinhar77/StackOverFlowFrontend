import React from 'react';
import msgIcon from '../../assets/message-solid.svg'
import pen from '../../assets/pen-solid.svg';
import sof from '../../assets/stack-overflow-brands.svg'
import './RightSidebar.css'

function Widget() {
    return (
        <div className="widget">
            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className='slider-inner-div1'>
                    <img src={pen} width={15} alt="" />
                    <p>Does high velocity lead to burnout? That may be the wrong question to ask.</p>
                </div>
                <div className='slider-inner-div1'>
                    <img src={pen} width={15} alt="" />
                    <p>Why AI is having an on-prem moment (Ep. 476)</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className='slider-inner-div1'>
                    <img src={msgIcon} width={15} alt="" />
                    <p>Recent site instability, major outages – July/August 2022</p>
                </div>
                <div className='slider-inner-div1'>
                    <img src={msgIcon} width={15} alt="" />
                    <p>Please welcome Valued Associate #1301 - Emerson</p>
                </div>
                <div className='slider-inner-div1'>
                    <img src={sof} width={15} alt="" />
                    <p>Staging Ground Workflow: Question Lifecycle</p>
                </div>
                <div className='slider-inner-div1'>
                    <img src={sof} width={15} alt="" />
                    <p>The [maintenance] tag is being burninated</p>
                </div>
                <div className='slider-inner-div1'>
                    <img src={sof} width={15} alt="" />
                    <p>Announcing Design Accessibility Updates on SO</p>
                </div>
                <h4>Hot Meta Posts</h4>
                <div className="right-sidebar-div-1">
                    <div className='slider-inner-div1'>
                        <h5>31</h5>
                        <p>Is it okay to post an answer questioning the correctness of other answers?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widget