import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={1}>
            <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" />
        </Col>
        <Col lg={11}>
            <div>{item.name}</div>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem;