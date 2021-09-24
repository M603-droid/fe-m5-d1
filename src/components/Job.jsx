import React from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";


export default function Job({jobs}){
    return (<Card>
        <Card.Body>
          <Card.Title>
            <Link to={`/${jobs.company_name} `}>
              {jobs.company_name}
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Job details
          </Card.Subtitle>
          <Card.Text>{jobs.title}</Card.Text>
          <Card.Link href="#">
            <Col xs={2}>
                {
             <BsHeart/>
}
            </Col>
          </Card.Link>
        </Card.Body>
      </Card>)
}