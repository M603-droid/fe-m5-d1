import React from "react";
import { Row, Col, Form, Card } from "react-bootstrap";

import Job from "./Job";
export default class SearchBar extends React.Component {
  state = {
    query: "",
    data: [],
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?title=" + this.state.query
    );
    const { data } = await response.json();

    this.setState({ data });

    console.log(data);
  };

  render() {
    {
      /* this.state.jobs.map((job) => {  */
    }
    return (
      <Row>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              type="search"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="write here to search..."
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto">
          {
          this.state.data.map(job => <Job jobs={job}/>)
  }
            

              
            
        
        </Col>
      </Row>
    );
  }
}
