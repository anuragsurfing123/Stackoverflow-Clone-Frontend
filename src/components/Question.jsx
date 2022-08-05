import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Badge from 'react-bootstrap/Badge';
import { isAuthenticated } from '../helper/authHelper';
import { votes } from '../helper/questionHelper';
import Moment from 'react-moment';
import swal from "sweetalert"

const Question = ({question}) => {
    const onVote = (voteVal)=>{
        const finalData = {vote_type:voteVal}

        const {email,username,accessToken}=isAuthenticated();
        const question_id = question?._id
        votes({accessToken,finalData,question_id}).then((data)=>{
            swal(`you have ${voteVal}d successfully`);
        })
       
    }
  return (
    <div>
        <Row>
            <div>
            <h5>{question?.title}</h5>
            Asked <Moment fromNow>{question?.createdAt}</Moment>
            <hr/>
            </div>
                   
        </Row>
        <Row>
            <Col lg={2} sm={12} className="text-center">
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
            <Col lg={10} sm={12}>
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
                    <p className="text-center">
                    <img height="50px" width="50px" src="https://www.gravatar.com/avatar/b85b2f1a077fc0f068d539425ddd2c84?s=256&d=identicon&r=PG"/>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"/><path fill="none" d="M0 0h48v48H0z"/></svg> */}
                   &nbsp; 
                        Asked <Moment fromNow>{question.createdAt}</Moment> <br/></p>
                    
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
