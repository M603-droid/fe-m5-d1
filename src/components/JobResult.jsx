import React from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart , BsFillHeartFill} from "react-icons/bs";
import { addToFav, removeFromFav } from '../store/actions';
import { connect } from 'react-redux';

const mapStateToProps = s => s

const mapDispatchToProps = (dispatch) => ({
    addToFavourites: (company) => dispatch(addToFav(company)),
    removeFromFavourites: (company) => dispatch(removeFromFav(company))
})

function JobResult({ jobs, favourites, addToFavourites, removeFromFavourites }) {

    const isFav = favourites.includes(jobs.company_name)
    console.log(isFav, favourites)
    const toggleFavourite = () => {
        isFav 
            ? removeFromFavourites(jobs.company_name) 
            : addToFavourites(jobs.company_name) 
    }

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
                {  isFav 
        
         ?  < BsFillHeartFill  onClick = {toggleFavourite}/>
             
         : <  BsHeart onClick = {toggleFavourite}/>
}
            </Col>
          </Card.Link>
        </Card.Body>
      </Card>)
}

export default connect(mapStateToProps, mapDispatchToProps)(JobResult)