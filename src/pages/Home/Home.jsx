import React from 'react'
import '../../App.css'
import LeftSlidebar from '../../components/LeftSlidebar/LeftSlidebar'
import RightSlidebar from '../../components/RightSlidebar/RightSlidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'

function Home() {
    return (
        <div className='home-container-1'>
            <LeftSlidebar/>
            <div className="home-containe-2">
                <HomeMainbar/>
                <RightSlidebar/>
            </div>
            
        </div>
    )
}
export default Home