import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
export default class SearchByCompany extends React.Component{

    componentDidMount(){
        this.getJobs()
    }
    getJobs = async () => {
         const response = await fetch('https://strive-jobs-api.herokuapp.com/jobs?company=' + this.props.match.params.companyName)
         const {data} = await response.json()
         this.setState({data})
     }
    render(){
        return <Container>
            <Row>
                <Col>{
                        this.state.data.map( job => <Job  jobs={job} />)
                    }
                </Col>
            </Row>
        </Container>
    
    }
}