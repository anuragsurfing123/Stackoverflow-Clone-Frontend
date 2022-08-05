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
    const location = useLocation();
    const question_id = location.pathname.split("/")[2];

    const [question, setQuestion] = useState('');

    const getQuestion = async ()=>{
        try{
           const res = await axios.get("http://127.0.0.1:5000/api/questions/"+question_id)
           console.log(res.data[0])

           setQuestion(res.data[0])

        }catch (err) {}
        
    }

    useEffect(() => {
        getQuestion();
    }, []);


    return (
                    
        <div>
             {/* { console.log(question)}     */}
          <Header/>
          <br/>
      <br/>
      <br/>
          <Row>
            <Col xs={2}>
              <Sidebar/>
            </Col>
            <Col xs={7}>
                <Question question={question}/>
                <Answer answerDetails={question.answerDetails} question_id={question._id}/>
            </Col>
            <Col xs={3}>
              <Blog/>
            </Col>
          </Row>
          
        </div>
      )
}

export default SingleQuestion
