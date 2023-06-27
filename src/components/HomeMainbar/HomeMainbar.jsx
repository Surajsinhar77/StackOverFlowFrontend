import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import './HomeMainbar.css';
import Questions from './Questions';

function HomeMainbar() {

    const navigator = useNavigate();
    const user = 1;

    var questionsList =[{
        id:1,
        upVotes: 3,
        downVotes: 2,
        votes: 3,
        noOfAnswers: 2,
        questionTitle: "what is a function?",
        questionTags:["java","javaScript","node js"],
        userPosted: "mono",
        time: "jan 1",
        userId : 1,
    
    },{
    
        id:2,
        votes: 0,
        noOfAnswers: 0,
        questionTitle: "what is a function?",
        questionBody: "It meant to be", 
        questionTags:["java"],
        userPosted: "mono",
        time: "jan 1"
    },{
    
        id:3,
        votes: 1,
        noOfAnswers: 0,
        questionTitle: "what is a function?",
        questionBody: "It meant to be", 
        questionTags:["java"],
        userPosted: "mono",
        time: "jan 1"
    }]
    
    const location = useLocation();

    const checkAuth = () =>{
        if(user === null){
            alert('Please login or sign up')
            navigator('/auth')
        }else{
            navigator('/AskQuestion')
        }
    }


    return (
        <div className='home-main-div'>
            <div className="home-div-1">
            {
                location.pathname === '/' ?  <h1>Top Questions</h1> : <h1>All Questions</h1>
            }
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div className='home-div-2'>
                {   
                    questionsList === null ? <h1>Loging...</h1> : 
                    <> <p className='no-of-question'>{questionsList.length}    question</p> 
                        
                        {
                            questionsList.map((question)=>(
                                <Questions question ={question} key={question.id} />
                            ))
                        }
                        
                    </>
                }
                
            </div>
        </div>
    )
}

export default HomeMainbar  