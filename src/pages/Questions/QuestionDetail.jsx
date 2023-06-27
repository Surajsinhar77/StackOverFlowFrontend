import React from 'react'
import {useParams,Link} from 'react-router-dom';
import upVotes from '../../assets/upVote.svg';
import downVotes from '../../assets/downVote.svg';
import './Question.css'
import Avater from '../../components/Avater/Avater'
import DisplayAnswer from './DisplayAnswer';

function QuestionDetail() {

    const {id} = useParams();

    var questionsList =[{
        _id: '1',
        upVotes: 3,
        downVotes: 2,
        // votes: 3,
        noOfAnswers: 2,
        questionTitle: "what is a function?",
        questionBody : " A computer program can easily produce gibberish - especially if it has been provided. ",
        questionTags:["java","javaScript","node js"],
        userPosted: "mono",
        askedOn: "jan 1",
        userId : 1,
        answer:[{
            answerBody:"Answer",
            userAnswered: "kuamr",
            answerredOn:"jab 2",
            userId: 2,
        }]
    
    },{
        _id: '2',
        upVotes: 3,
        downVotes: 2,
        // votes: 3,
        noOfAnswers: 2,
        questionTitle: "what is a function?",
        questionBody : " A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand. ",
        questionTags:["java","javaScript","node js"],
        userPosted: "mono",
        askedOn: "jan 1",
        userId : 1,
        answer:[{
            answerBody:"Answer",
            userAnswered: "kuamr",
            answerredOn:"jab 2",
            userId: 2,
        }]
    
    },{
        _id: '3',
        upVotes: 3,
        downVotes: 2,
        // votes: 3,
        noOfAnswers: 0,
        questionTitle: "what is a function?",
        questionBody : " lorem hasjkahd  asdjasdhajkshdas v h sga ",
        questionTags:["java","javaScript","node js"],
        userPosted: "mono",
        askedOn: "jan 1",
        userId : 3,
        answer:[{
            answerBody:"Answer",
            userAnswered: "kuamr",
            answerredOn:"jab 2",
            userId: 2,
        }]
    
    },]

    return (
        <div className='question-detail-pages'>
            {
                questionsList === null?
                <h1>Loding...</h1>
                :
                <>
                    {
                        questionsList.filter(question => question._id === id).map(question => (
                            <div key={question.id}>
                                <section className='question-detail-container'>
                                <h1>{question.questionTitle}</h1>
                                    <div className='question-detail-container-2'>
                                        <div className="question-votes">
                                            <img src={upVotes} className='votes-icon' alt="upvotelogo" width='18' />
                                            <p>{question.upVotes - question.downVotes}</p>
                                            <img src={downVotes} className='votes-icon' alt="downvotelogo" width='18'/>
                                        </div>
                                        <div style={{width : '100%'}}> 
                                            <p className='question-body'>{question.questionBody}</p>
                                            <div className="question-detail-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag} > {tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type='button'>Share</button>
                                                    <button type='button'>Delete</button>
                                                </div>
                                                <div>
                                                    <p>asked {question.askedOn}</p>
                                                    <Link to={`/User${question.userId}`} className='user-link' style={{color: '#0086d8'}}>
                                                        <Avater backgroundColor='orange' px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avater>
                                                        <div>
                                                            {
                                                                question.userPosted
                                                            }
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !==0 && (
                                        <section>
                                            <h3>
                                                {question.noOfAnswers} answer
                                            </h3>
                                            <DisplayAnswer key={question._id} question = {question}/>
                                        </section>
                                    )
                                }
                                <section className='post-ans-container'> 
                                    <h3>
                                        Your Answer
                                    </h3>
                                    <form>
                                        <textarea name="" id="" cols="30" rows="10"></textarea><br />
                                        <input type="submit" name="" id=""className='post-ans-btn' value='Post Your Answer' />
                                    </form>
                                    <p>
                                        Browser other Question tagged {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                            }or
                                            <Link to='/AskQuestion' style={{textDecoration: 'none',color:'#009dff'}} >Ask your Own Question</Link>
                                        
                                    </p>
                                </section>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}

export default QuestionDetail