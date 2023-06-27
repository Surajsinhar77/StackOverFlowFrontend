import React from 'react'
import LeftSlidebar from '../../components/LeftSlidebar/LeftSlidebar'
import RightSlidebar from '../../components/RightSlidebar/RightSlidebar'
import QuestionDetail from '../Questions/QuestionDetail'
import '../../App.css';

function DisplayQuestion() {
    return (
        <div className='home-container-1'>
            <LeftSlidebar/>
            <div className="home-containe-2">
                {/* <HomeMainbar/> */}
                <QuestionDetail/>
                <RightSlidebar/>
            </div>
        </div>
    )
}

export default DisplayQuestion