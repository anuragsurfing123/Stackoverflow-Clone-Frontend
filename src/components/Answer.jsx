import React,{useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { isAuthenticated } from '../helper/authHelper';
import { answers } from '../helper/questionHelper';


const Answer = ({answerDetails,question_id}) => {
    const[answer,setAnswer] = useState("")
    const onSubmit = event=>{
        event.preventDefault();
        const finalData = {answer:answer,question_id:question_id}

        const {email,username,accessToken}=isAuthenticated();
        answers({accessToken,finalData}).then((data)=>{
            console.log(data)
        })
        
    }
  return (
    <Row>
        <Col xs={2}>
        </Col>
        <Col xs={10}>
            <div>
                <h3>Answers</h3>
                <hr/>
                {
                    answerDetails?.map((answer)=>{
                        return(
                            <Row>
                                <Col xs={10}>
                                <div dangerouslySetInnerHTML={{__html:answer.answer}}></div>
                                </Col>
                                <Col xs={2}>
                                <div>nn</div>
                                </Col>
                                <hr/>
                            

                            </Row>
                            
                        
                            
                        )
                    })
                }
                <hr/>
                {isAuthenticated() ?<Form className='p-3 card'>
                

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Body</Form.Label><br/>
                    <Form.Text className="text-muted">
                    Include all the information someone would need to answer your question
                    </Form.Text>  
                    <ReactQuill theme="snow" value={answer} onChange={setAnswer} /> 
                </Form.Group>

                

                <Button size="sm" variant="primary" onClick={onSubmit} type="submit">
                    Post Your Question </Button>
            </Form>: <a>Please Login To Post a answer</a>}

            </div>
        </Col>
        
    </Row>
  )
}

export default Answer
