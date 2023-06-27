import React from 'react'
import { Link } from 'react-router-dom'
import './HomeMainbar.css'

function Questions({question}) {
    return (
        <div className='display-question-container'>
            <div className="display-vote-ans">
                    <p>{question.votes}</p>
                    <p>votes</p>
            </div>
            <div className="display-vote-ans">
                    <p>{question.noOfAnswers}</p>
                    <p>Answers</p>
            </div>
            <div className="display-question-details">
                    <Link to={`/Questions/${question.id}`} className="question-title-link">{question.questionTitle}</Link>
                    <div className="display-tags-time">
                        <div className="display-tags">
                            {
                                question.questionTags.map((tags)=> (
                                    <p key={tags}>{tags}</p>
                                ))
                            }
                        </div>
                        <div className="display-time">
                            asked {question.time} {question.userPosted}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Questions