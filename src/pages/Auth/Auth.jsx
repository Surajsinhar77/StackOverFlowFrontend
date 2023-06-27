import React from "react";
import { useState } from "react";
import logo from '../../assets/stackOverFlow.png';
import './Auth.css'
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Auth() {

    const [isSignup, isSetSignup] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelSubmit = (e) =>{
        e.preventDefault()
        if(!email && !password){
            alert("Enter email and password")
        }
        if(isSignup){
            if(!name){
                alert("Press enter to contniue")
            }
            dispatch(signup({name, email, password}, navigate))
        }else{
            dispatch(login({email, password}, navigate))
        }
    }

    const handelSwitch = () =>{
        isSetSignup(!isSignup)
    }

    return (
        <section className="auth-section">
        {
            isSignup && <AboutAuth/>
        }
            <div className="auth-container-2">
            
                {!isSignup && <img className="stackover-flow" src={logo} alt="stackoverflow_logo" width={40} />}
                <form onSubmit={handelSubmit}>
                {
                    isSignup && <label htmlFor="display-name">
                        <h4>Display Name</h4>
                        <input type="text" className="dp-input" name="name" onChange={(e) => {setName(e.target.value)}} id="display-name" />
                    </label>
                }
                    <label htmlFor="email">
                        <h4>Email</h4>
                        <input type="email" id="email" name="email" onChange={(e) => {setEmail(e.target.value)}}  className="email-input" />
                    </label>
                    <label htmlFor="password">
                    <div className="forget-pass-thing">
                        <h4>Password</h4>
                        {!isSignup && <p style={{color:'#007ac6',fontSize:'13px'}}>Forget password?</p>} 
                    </div>
                        <input type="password" id="password" name="password" onChange={(e) => {setPassword(e.target.value)}}  className="pw-input" />
                    </label>
                    { isSignup && <p className="stg-pass-hint" style={{color: '#666767', fontSize: '13px'}}>
                        Passwords must contain at least eight characters,<br/> including at least 1 letter and 1 number
                    </p>}
                    
                    { isSignup &&
                        <label>
                            <input type='checkBox' name="chkbox" htmlFor='check-opt'/> <p className="cheak-for" id="check-opt" style={{ fontSize: '13px'}}>Opt-in to receive occasional  product <br/>updates, user research invitations, company<br/> announcements, and digests.</p>
                        </label>
                    }
                    
                    <button type="submit" className="submit-wla-btn" >{isSignup?  'Sign up' : ' Log in'}</button>
                    {
                        isSignup && 
                        <p style={{color: "#666767", fontSize: '13px'}}>
                        By clicking  “Sign up”, you agree to our <span style={{color: '#007ac6'}}>terms of <br/> service</span>, <span style={{color: '#007ac6'}}>privacy policy </span> and <span style={{color: '#007ac6'}}>cookie policy</span> 
                        </p>
                    }
                </form>
                <p style={{fontSize: "13px",marginTop:'16px'}}>
                    {isSignup? 'Already hava an account? ' : "Don't have an account? "}
                    <button type="button" className="handelSwitch-btn" onClick={handelSwitch} >{isSignup ? 'Log in': 'Sign up'}</button>
                </p>
            </div>
        </section>
    )
}
export default Auth;
