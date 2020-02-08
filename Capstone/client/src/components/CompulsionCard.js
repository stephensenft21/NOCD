import React, { Component } from 'react';
import API from '../../modules/APIManager'
import { Card, Row, CardTitle,Button, CardBody } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";

import "./CommentCard.css"

class CompulsionCard extends Component {
   

    handleDelete = (id) => {
        API.delete(id, "compulsion")
            .then(() => this.props.getCompulsionAndPatientsRecordData());
            //this method needs to change to push back to the welcome view after deletion or chart view havent decided yet
    }


    //renders
    render() {
  
        return (
            <div>
                <Card className="mainCard">
                    <CardBody>
                        <CardTitle>{this.props.comment.text}</CardTitle>
                    
                        
                        <Row className="buttonFlex">
                            <Button className="button" type="button" onClick={() => this.handleDelete(this.props.compulsion.id)}><FaRegTrashAlt /></Button>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CompulsionCard;