import React from 'react'
import './Question.css'
import { Link } from 'react-router-dom'
import Avater from '../../components/Avater/Avater'

function DisplayAnswer({question}) {
    return (
        <div>
            {
                question.answer.map((ans)=>(
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="submit">Share</button>
                                <button type="submit">Delete</button>
                            </div>
                            <div>
                                <p>answered {ans.answeredOn} </p>
                                <Link to={`/User${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                                                        <Avater backgroundColor='green' px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avater>
                                                        <div>
                                                            {
                                                                ans.userAnswered
                                                            }
                                                        </div>
                                                    </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer