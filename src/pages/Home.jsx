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
        await axios.get("http://127.0.0.1:5000/api/questions").then((res) => {
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
        <Col xs={2}>
          <Sidebar/>
        </Col>
        <Col xs={7}>
          <AllQuestions questions={questions}/>
        </Col>
        <Col xs={3}>
          <Blog/>
        </Col>
      </Row>
    </div>
  )
}

export default Home
