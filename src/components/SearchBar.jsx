import React from "react";
import { Row, Col, Form } from "react-bootstrap";
export default class SearchBar extends React.Component {

    state = {
        query: '',
        jobs: []
    }


    handleChange = (e) => {
        this.setState({query: e.target.value})
    }


    handleSubmit = async (e) => {
        e.preventDefault()
        
        const response = await fetch("https://remotive.io/api/remote-jobs?search=" + this.state.query)
        const {jobs} = await response.json()

        this.setState({jobs})
        
        console.log(jobs)
    }
    
    render() { 
        return(
            jobs.map((job)=>{<Row>
                <Col xs={4} >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder = "write here to search...." />
                </Form>
                </Col>
                <Col xs={8}>
            
                </Col>
                </Row>})
        
             
            )
    }
}