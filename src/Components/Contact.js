import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';

const Contact=(props)=>
{
    return(
        <div className="contact-container">
        <Card style={{ width: '18rem', height:'47rem' }}>
        <Card.Img variant="top" src="IMG-20230404-WA0011 1.jpg" />
        <Card.Body>
          <h1><Card.Title>Shubham Budde</Card.Title></h1>
          <p><b>Junior React Developer</b></p>
          <Card.Text>
         "Connect with us! Reach out for inquiries, support, or just to say hello. We're here to assist you. Use the contact info provided to reach us."."
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Coontact: 8080427639</ListGroup.Item>
          <ListGroup.Item>Email Id: shubhambudde0718@gmail.com</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://github.com/shubhamB17">Github</Card.Link>
          <Card.Link href="https://www.linkedin.com/in/shubham-budde-a120b4249/">LinkedIn</Card.Link>
        </Card.Body>
      </Card>
      </div>
        
      
    );
}

export default Contact;