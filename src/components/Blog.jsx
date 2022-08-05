import React from 'react'
import Card from 'react-bootstrap/Card';

function Blog() {
  return (
    <Card className="bg-info" style={{ width: '18rem' }}>
    <Card.Header>The Overflow Blog</Card.Header>
      <Card.Body>
        {/* <Card.Title>The Overflow Blog</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
        Monitoring data quality with Bigeye (Ep. 469)
        </Card.Text>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  )
}

export default Blog
