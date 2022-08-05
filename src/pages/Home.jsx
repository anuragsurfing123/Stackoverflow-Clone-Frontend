import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Sidebar from '../components/Sidebar';
import AllQuestions from '../components/AllQuestions';
import Blog from '../components/Blog';
import axios from 'axios';



function Home() {

  const [questions, setQuestions] = useState([]);

    const getQuestion = async ()=>{
        await axios.get(`${process.env.REACT_APP_API_URL}/questions`).then((res) => {
            setQuestions(res.data);
            // console.log(res.data)
        });
    }

    useEffect(() => {
        // console.log("Hi")
        getQuestion();
    }, []);

  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <br/>

      <Row>
        <Col lg={2} sm={12}>
          <Sidebar/>
        </Col>
        <Col lg={7} sm={12}>
          <AllQuestions questions={questions}/>
        </Col>
        <Col lg={3} sm={12}>
          <Blog/>
        </Col>
      </Row>
    </div>
  )
}

export default Home
