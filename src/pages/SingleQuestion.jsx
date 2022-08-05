import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import Sidebar from '../components/Sidebar';
import Blog from '../components/Blog';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import Question from '../components/Question';
import Answer from '../components/Answer';



const SingleQuestion=() =>{
    const API_URL=process.env.REACT_APP_API_URL
    const location = useLocation();
    const question_id = location.pathname.split("/")[2];

    const [question, setQuestion] = useState('');
    const getQuestion =  async ()=>{
        try{
           const res =  await axios.get(API_URL+"/questions/"+question_id)
           setQuestion(res.data[0])

        }catch (err) {}
        
    }

    const updateViews = async ()=>{
      try{
        const res =  await axios.put(API_URL+"/questions/viewUpdate/"+question_id)
        if(res){
          // console.log("view updated")
        }
     }catch (err) {}

    }

    useEffect(() => {
        getQuestion();
        updateViews();
    }, []);


    return (
                    
        <div>
             {/* { console.log(question)}     */}
          <Header/>
          <br/>
      <br/>
      <br/>
          <Row>
            <Col lg={2} sm={12}>
              <Sidebar/>
            </Col>
            <Col lg={7} sm={12}>
                <Question question={question}/>
                <Answer answerDetails={question.answerDetails} question_id={question._id}/>
            </Col>
            <Col lg={3} sm={12}>
              <Blog/>
            </Col>
          </Row>
          
        </div>
      )
}

export default SingleQuestion
