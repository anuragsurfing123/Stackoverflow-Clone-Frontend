import React from 'react'
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";


function Sidebar() {
  return (
    <Nav variant="pills" defaultActiveKey="/" className="flex-column">
        <Nav.Link className = "text-dark active"><Link style={{textDecoration: "none",color:"black"}} to="/">Questions</Link></Nav.Link>
        <Nav.Link className = "text-dark"  href="#action2" disabled>Tags</Nav.Link>
        <Nav.Link className = "text-dark"  href="#action3" disabled>Users</Nav.Link>

      
    </Nav>
  )
}

export default Sidebar
