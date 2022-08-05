import React,{useState,useEffect} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

function AllQuestions({questions}) {

  return (
    <div>
        <Row className='mt-3'>
            <Col xs={6}>
            <h3>All Questions</h3>
            </Col>
            <Col xs={6} className="mr-1">
            <Button variant="primary"><Link style={{textDecoration: "none",color:"white"}} to="/askquestion">Ask Question</Link> </Button>
            </Col>     
        </Row>
        <Row className='mt-3'>
            <Col xs={4}>
            <h5>{questions.length} Questions</h5>
            </Col>
            <Col xs={8} className="mr-1">
                <Tabs defaultActiveKey="today" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="today" title="Today"></Tab>
                    <Tab eventKey="month" title="Month"></Tab>
                    <Tab eventKey="year" title="Year"></Tab>
                </Tabs>
            </Col>     
        </Row>

        {/* question */}
        {questions.map(data=>{
            return(
                <Row>
            <hr/>
                <Col  xs={2}>
                {data.votes} Votes<br/>
                {data.answerDetails.length} Answers<br/>
                {data.views} views<br/>
                {data.tags.length} tags
                </Col>
                <Col xs={10}>
                
                <Link style={{textDecoration: "none"}} to={`/questions/${data._id}/${data.title.replace(/\s/g, '-')}`}>
                <h5>{data.title}</h5>
                </Link>
                
                <p dangerouslySetInnerHTML={{__html:data.body}}></p>
                <p>
                <Row>
                    <Col xs={6}>
                        {
                            data.tags.map((tag)=>{
                                
                                return(
                                    <Badge bg="secondary" className='m-1'>{tag}</Badge> 
                                )
                                
                            })
                        }
                        
                        {/* <Badge bg="secondary">Secondary</Badge> {' '}
                        <Badge bg="success">Success</Badge>  {' '}
                        <Badge bg="danger">Danger</Badge> {' '} */}
                    </Col>
                    <Col xs={6}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                   { data.userDetail[0].username }| {new Date(data.createdAt).toLocaleString()}
                    </Col>

                </Row>
                
                </p>
                </Col>
            <hr/>
        </Row>
            )
        })}
        
        
        {/* end question */}

        


    </div>
  )
}

export default AllQuestions
