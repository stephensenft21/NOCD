import React, { Component } from 'react';
import API from '../../modules/APIManager'
import { Card, Row, CardTitle,Button, CardBody } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";

import "./CommentCard.css"

class CommentCard extends Component {
   

    handleDelete = (id) => {
        API.delete(id, "compulsion")
            .then(() => this.props.getCompulsionAndPatientsRecordData());
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

export default CommentCard;