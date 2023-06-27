import React from "react";
import { NavLink } from "react-router-dom";
import './LeftSidebar.css';
import Global from '../../assets/globe.png';


function LeftSlidebar() {
    return (
        <div className="left-slidebar">
            <nav className="slide-nav">
                <NavLink to='/' className='slide-nav-link' activeClassName='Active' >
                    <p>Home</p>
                </NavLink>
                <div className="slide-nav-div">
                    <div><p>PUBLIC </p></div>
                    <NavLink to='/Questions' className='slide-nav-link' activeClassName='Actice'>
                        <img src={Global} alt="Global" width={15} />
                        <p style={{paddingLeft:"10px"}}>Question</p>
                    </NavLink>
                    <NavLink to='/Tags' className='slide-nav-link tags'>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Tags' className='slide-nav-link tags'>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default LeftSlidebar;
