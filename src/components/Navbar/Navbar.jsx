import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/stackOverFlow.png';
import '../../App.css';
import Avater from '../Avater/Avater';
// import search_icon from '../../assets/icon-search.png'
import { DataContext } from "../../pages/Auth/DataProvider";
import { useContext } from "react";

const Navbar = () => {
    const {data , login, logout} = useContext(DataContext);
    console.log(data)

    return (
            <nav className='main-nav'>
            <div className='upper-border-line'></div>
                <div className='navbar'>
                    <Link to="/" className='nav-item logo'>
                        <img src={logo} alt="logo" width={35} />
                        <h4><span className='stack-text'>stack</span><b className='logo-bold-text'>overflow</b></h4>
                    </Link>
                    <Link to="/" className='nav-item nav-btn'>About</Link> 
                    <Link to="/" className='nav-item nav-btn'>Products</Link>
                    <Link to="/" className='nav-item nav-btn'>ForTeams</Link> 
                        
                        <form className='nav-item nav-item-search '>
                            <div className='search-bar'>
                            <input className='search_box' type="text" placeholder='Search...'/>
                            </div>
                        </form>
                    
                    {
                        data == true? 
                            <Link to='/User' className='avater-item' >{<Avater backgroundColor="#009dff" px='0.225rem' py='0.660rem' borderRadius='50%' color="white"></Avater>} 

                            <Link to='/Auth'>
                                <input type='button' onClick={logout} className='btn login-btn' value='Log out'></input>  
                            </Link>

                            </Link> 
                        :  
                            <Link to='/Auth'> <input className='btn login-btn' type="button" value='Log in'/></Link> 
                    }
                </div>
            </nav>
    )
}

export default Navbar
