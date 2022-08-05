import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Sidebar() {
  return (
    <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
        <Nav.Link className = "text-dark active" href="#action1">Questions</Nav.Link>
        <Nav.Link className = "text-dark"  href="#action2" disabled>Tags</Nav.Link>
        <Nav.Link className = "text-dark"  href="#action3" disabled>Users</Nav.Link>

      
    </Nav>
  )
}

export default Sidebar
