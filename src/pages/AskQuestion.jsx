import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { isAuthenticated } from '../helper/authHelper';
import { questions } from '../helper/questionHelper';
import {Navigate} from "react-router-dom"
import swal from 'sweetalert';




const AskQuestion = () => {
    const [value, setValue] = useState({
        title: "",
        tags: "",
        error: "",
    });

    const[rtvalue,setRtvalue] = useState("")

    const { title, tags, error } = value;

    const handleChange = name => event => {
        setValue({ ...value, [name]: event.target.value });
    };
    const onSubmit = event=>{
        event.preventDefault();
        const finalData = {...value,body:rtvalue}

        const {email,username,accessToken}=isAuthenticated();
        questions({accessToken,finalData}).then((data)=>{
            swal("Question created successfully", "", "success");
            setValue({
                title: "",
                tags: "",
                error: "",
            })

            setRtvalue("");

        })
        
    }





  return (
    isAuthenticated() ? <div>
      <Header/>
      <br/><br/><br/>
      <div style={{padding:"25px"}}>
        <div style={{paddingBottom:"25px"}}>
            <h2>Ask a question</h2>
        </div>
        <Row>
            <Col lg={8} sm={12}>
            <Form className='p-3 card'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label><br/>
                    <Form.Text className="text-muted">
                    Be specific and imagine you’re asking a question to another person
                    </Form.Text>  
                    <Form.Control type="text" placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                    onChange={handleChange("title")}
                    value={title}
                    />   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Body</Form.Label><br/>
                    <Form.Text className="text-muted">
                    Include all the information someone would need to answer your question
                    </Form.Text>  
                    <ReactQuill theme="snow" value={rtvalue} onChange={setRtvalue} /> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tag Name</Form.Label><br/>
                    <Form.Text className="text-muted">
                    Add up to 5 tags to describe what your question is about
                    </Form.Text>  
                    <Form.Control type="text" placeholder="e.g. (ajax, django, string)"
                    onChange={handleChange("tags")}
                    value={tags}
                    />   
                </Form.Group>

                <Button size="sm" variant="primary" onClick={onSubmit} type="submit">
                    Post Your Question </Button>
            </Form>

            
            </Col>
            <Col lg={4} sm={12}>
                <Card style={{ width: '30rem' }}>
                <Card.Header>Draft your question</Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Draft your question</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                        <Card.Text>
                            <small>
                            The community is here to help you with specific coding, algorithm, or language problems.
                        Avoid asking opinion-based questions.<br/><br/>

                        <b>1.  Summarize the problem</b>
                        <ul>
                            <li>Include details about your goal</li>
                            <li>Describe expected and actual results</li>
                            <li>Include any error messages</li>
                        </ul>
                        <hr/>

                        <b>2.  Summarize the problem</b><br/>
                        Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.
                        <hr/>
                        
                        <b>3.  Summarize the problem</b><br/>
                        When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)
                        <hr/>



                            </small>
                        
                        </Card.Text>
                        {/* <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>

            </Col>
        </Row>

      </div>
    
      
    </div>:<Navigate to={"/login"}/>
  )
}

export default AskQuestion
