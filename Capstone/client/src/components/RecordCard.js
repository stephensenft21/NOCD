import React, { Component } from 'react';
import API from '../../modules/APIManager'
import { Card, Row, CardTitle, CardText, Button, CardBody } from "reactstrap";
import { FaRegTrashAlt } from "react-icons/fa";
import Moment from 'moment';
import "./CommentCard.css"

class CommentCard extends Component {
   

    handleDelete = (id) => {
        API.delete(id, "records")
            .then(() => this.props.getCompulsionAndPatientsRecordData());
    }


    //renders
    render() {
        let timeStamp = Moment(this.prop.record.date).fromNow();
        return (
            <div>
                <Card className="mainCard">
                    <CardBody>
                        <CardTitle>{this.props.record.id}</CardTitle>
                        <CardText> {timeStamp}  </CardText >
                        
                        <Row className="buttonFlex">
                            <Button className="button" type="button" onClick={() => this.handleDelete(this.props.record.id)}><FaRegTrashAlt /></Button>
                        </Row>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default CommentCard;