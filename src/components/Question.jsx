import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Badge from 'react-bootstrap/Badge';
import { isAuthenticated } from '../helper/authHelper';
import { votes } from '../helper/questionHelper';

const Question = ({question}) => {
    const onVote = (voteVal)=>{
        const finalData = {vote_type:voteVal}

        const {email,username,accessToken}=isAuthenticated();
        const question_id = question?._id
        votes({accessToken,finalData,question_id}).then((data)=>{
            console.log(data)
        })
       
    }
  return (
    <div>
        <Row>
            <div>
            <h5>{question?.title}</h5>
            Asked {question?.createdAt}
            <hr/>
            </div>
                   
        </Row>
        <Row>
            <Col xs={2}>
                <div>
                <Button variant="primary" onClick={()=>onVote("upvote")}>UpVote</Button>
                   <br/>
                <b className='text-center'>{question.answerDetails?.length}</b><br/>
                answers<br/>
                <b>{question.comments?.length}</b><br/>
                comment<br/>
                <b>{question.tags?.length}</b><br/>
                tag<br/>
                <Button variant="danger" onClick={()=>onVote("downvote")}>DownVote</Button>
                </div>
            </Col>
            <Col xs={10}>
                <div>
                    <p>{question.body}</p>
                    <p>
                    {
                    question.tags?.map((tag)=>{
                        
                        return(
                            <Badge bg="secondary" className='m-1'>{tag}</Badge> 
                        )
                        
                    })
                }
                    </p>
                    <p>Asked {question.createdAt}<br/></p>
                    
                </div>
                
                {
                    question.comments?.map((comment)=>{
                        return(
                            <div>
                            <hr/>
                            <h6>{comment.comment}</h6>
                            </div>
                            

                        )
                    })
                }
                {isAuthenticated()&&<Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="text" placeholder="Leave Your Comment" />
                        
                    </Form.Group>
                    {/* <Button variant="primary" type="submit">
                        Post
                    </Button> */}
                </Form>}
            </Col>
        </Row>  
        </div>
  )
}

export default Question
