import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { signout, isAuthenticated } from "../helper/authHelper";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";


function Header() {
  return (
    <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container fluid >
        <Navbar.Brand href="/"><svg xmlns="http://www.w3.org/2000/svg" width="187" height="37" fill="none" viewBox="0 0 187 37" className="full-logo"><path fill="black" d="M42 23.0042L39.8 22.8042C38.1 22.7042 37.5 22.0042 37.5 20.8042C37.5 19.4042 38.5 18.6042 40.5 18.6042C41.8 18.5042 43.1 18.9042 44.1 19.7042L45.4 18.4042C44 17.4042 42.3 16.9042 40.6 17.0042C37.7 17.0042 35.7 18.5042 35.7 20.9042C35.7 23.1042 37.1 24.3042 39.7 24.5042L41.9 24.7042C43.5 24.8042 44.1 25.5042 44.1 26.7042C44.1 28.3042 42.7 29.1042 40.5 29.1042C38.9 29.2042 37.4 28.6042 36.3 27.5042L35 28.8042C36.5 30.2042 38.5 30.8042 40.5 30.7042C43.7 30.7042 46 29.2042 46 26.6042C46 24.0042 44.4 23.2042 42 23.0042ZM57.8 16.9042C55.6 16.9042 54.3 17.3042 53.1 18.8042L54.4 20.1042C55.2 19.0042 56.5 18.4042 57.8 18.6042C60.3 18.6042 61.2 19.6042 61.2 21.5042V22.8042H57.2C54.2 22.8042 52.6 24.3042 52.6 26.7042C52.6 27.7042 52.9 28.7042 53.6 29.4042C54.4 30.3042 55.5 30.6042 57.4 30.6042C58.8 30.7042 60.3 30.2042 61.3 29.2042V30.5042H63.3V21.4042C63.2 18.5042 61.4 16.9042 57.8 16.9042ZM61.2 25.8042C61.3 26.6042 61.1 27.5042 60.5 28.1042C59.7 28.8042 58.6 29.1042 57.5 29.0042C55.4 29.0042 54.4 28.3042 54.4 26.7042C54.4 25.1042 55.4 24.3042 57.4 24.3042H61.2V25.8042ZM70.9 18.7042C72.1 18.7042 73.3 19.2042 74 20.2042L75.3 18.9042C74.2 17.6042 72.6 16.8042 70.9 16.9042C67.5 16.9042 65 19.2042 65 23.8042C65 28.4042 67.6 30.7042 70.9 30.7042C72.6 30.8042 74.2 30.0042 75.3 28.7042L74 27.4042C73.3 28.4042 72.1 28.9042 70.9 28.9042C69.7 29.0042 68.5 28.4042 67.8 27.4042C67.1 26.3042 66.8 25.1042 66.9 23.8042C66.8 22.5042 67.1 21.3042 67.8 20.2042C68.5 19.2042 69.7 18.6042 70.9 18.7042ZM87.7 17.1042H85.3L79.2 23.0042V11.1042H77.2V30.5042H79.2V25.6042L81.6 23.2042L86.1 30.5042H88.5L82.9 21.9042L87.7 17.1042ZM96.9 16.9418C95.3 16.8418 93.7 17.4418 92.6 18.6418C91.3 19.9418 91 21.5418 91 24.0418C91 26.5418 91.3 28.1418 92.6 29.4418C93.7 30.5418 95.3 31.1418 96.9 31.1418C98.5 31.2418 100.1 30.6418 101.2 29.4418C102.5 28.1418 102.8 26.5418 102.8 24.0418C102.8 21.5418 102.5 19.9418 101.2 18.6418C100.1 17.4418 98.5 16.8418 96.9 16.9418ZM98.6 27.4418C97.7 28.2418 96.3 28.2418 95.4 27.4418C94.7 26.7418 94.6 25.4418 94.6 24.0418C94.6 22.6418 94.7 21.3418 95.4 20.6418C96.3 19.8418 97.7 19.8418 98.6 20.6418C99.3 21.3418 99.4 22.5418 99.4 24.0418C99.4 25.5418 99.3 26.7418 98.6 27.4418ZM112.2 17.0418L109.4 25.6418L106.6 17.0418H102.9L108.1 31.0418H110.8L115.9 17.0418H112.2ZM121.8 16.9418C118.2 16.9418 115.7 19.5418 115.7 24.0418C115.7 29.7418 118.9 31.2418 122.2 31.2418C124.2 31.3418 126.2 30.5418 127.5 29.0418L125.4 26.9418C124.6 27.8418 123.4 28.3418 122.2 28.2418C120.6 28.3418 119.2 27.1418 119.1 25.5418V25.1418H127.8V23.5418C127.9 19.7418 125.7 16.9418 121.8 16.9418ZM119.1 22.7418C119.1 22.2418 119.2 21.7418 119.4 21.2418C119.8 20.3418 120.7 19.8418 121.7 19.8418C122.7 19.7418 123.6 20.3418 124 21.2418C124.2 21.7418 124.3 22.2418 124.3 22.7418H119.1ZM132.433 18.4418V17.1418H129.033V31.1418H132.533V22.7418C132.433 21.4418 133.333 20.3418 134.633 20.1418H134.833C135.533 20.1418 136.233 20.4418 136.633 20.9418L139.233 18.3418C138.433 17.4418 137.133 16.9418 135.933 17.0418C134.633 16.9418 133.333 17.4418 132.433 18.4418ZM140.024 15.6418V31.0418H143.524V20.0418H146.124V17.3418H143.524V15.8418C143.424 15.2418 143.824 14.6418 144.424 14.5418H146.024V11.5418H144.024C141.924 11.4418 140.124 13.1418 140.024 15.3418V15.6418ZM160.3 16.9418C158.7 16.8418 157.1 17.4418 156 18.6418C154.7 19.9418 154.4 21.5418 154.4 24.0418C154.4 26.5418 154.7 28.1418 156 29.4418C157.1 30.5418 158.7 31.1418 160.3 31.1418C161.9 31.2418 163.5 30.6418 164.6 29.4418C165.9 28.1418 166.2 26.5418 166.2 24.0418C166.2 21.5418 165.9 19.9418 164.6 18.6418C163.5 17.4418 161.9 16.8418 160.3 16.9418ZM162 27.4418C161.1 28.2418 159.7 28.2418 158.8 27.4418C158.1 26.7418 158 25.4418 158 24.0418C158 22.6418 158.1 21.3418 158.8 20.6418C159.7 19.8418 161.1 19.8418 162 20.6418C162.7 21.3418 162.8 22.5418 162.8 24.0418C162.8 25.5418 162.7 26.7418 162 27.4418ZM182.7 17.0418L180.4 25.6418L177.5 17.0418H175L172.2 25.7418L169.9 17.1418H166.2L170.5 31.1418H173.4L176.3 22.3418L179.2 31.1418H182.2L186.5 17.1418L182.7 17.0418ZM151.479 26.8418V11.6418H147.979V27.0418C147.879 29.1418 149.479 30.9418 151.579 31.0418H154.079V28.0418H152.779C152.179 28.1418 151.679 27.8418 151.479 27.2418V26.8418ZM52.7034 17.4042H49.0034V13.0042H47.0034V26.9042C47.0034 28.9042 48.1034 30.5042 50.4034 30.5042H51.8034V28.8042H50.8034C49.5034 28.8042 49.0034 28.1042 49.0034 26.8042V19.1042H50.9034L52.7034 17.4042Z"></path><path fill="#BCBBBB" d="M26 33V24H30V37H0V24H4V33H26Z"></path><path fill="#F48024" d="M23.0908 25.9902L23.7844 23.041L7.67993 19.687L7 23L23.0908 25.9902ZM9.1 15.2L24.1 22.2L25.5 19.2L10.5 12.2L9.1 15.2ZM13.3 7.8L26 18.4L28.1 15.9L15.4 5.3L13.3 7.8ZM21.5 0L18.8 2L28.7 15.3L31.4 13.3L21.5 0ZM7 30H23V27H7V30Z"></path></svg></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            <Nav.Link className = "text-dark" href="#action1"><Link style={{textDecoration: "none",color:"black"}} to="/">Home</Link></Nav.Link>
            <Nav.Link className = "text-dark"  href="#action2"><Link style={{textDecoration: "none",color:"black"}} to="/askquestion">Ask Question</Link></Nav.Link>
            <Nav.Link className = "text-dark"  href="#action2">Tags</Nav.Link>

            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            
          </Form>
          
          </Nav>
          <Form className="d-flex">

            {
              isAuthenticated() ?
              <div>
              <span>{isAuthenticated().username}  </span>
              <Button variant="danger" className='m-2'
              onClick={() => {
                signout(() => {
                  window.location.href='/'
                });
              }}
              >Logout</Button>
              </div>
              
              :
              <div>
              <Button variant="primary" className='m-2'><Link style={{textDecoration: "none",color:"white"}} to={"/login"}>LogIn</Link></Button>
              <Button variant="success" className='m-2'><Link style={{textDecoration: "none",color:"white"}} to={"/register"}>SignUp</Link></Button>
              </div>
              

            }
          
            {/* <Button variant="primary" className='m-2'><Link style={{textDecoration: "none",color:"white"}} to={"/login"}>LogIn</Link></Button>
            <Button variant="success" className='m-2'>Register</Button> */}

            

          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
