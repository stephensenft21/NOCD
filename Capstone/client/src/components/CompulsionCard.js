import React, { Component } from 'react';
import API from '../API/dataManager'
import { withRouter } from 'react-router-dom';
import { Collapse } from '@material-ui/core';
// import { Card, Row, CardTitle,Button, CardBody } from "reactstrap";
// import { FaRegTrashAlt } from "react-icons/fa";



class CompulsionCard extends Component {
   

    handleDelete = (id) => {
        API.deleteUserData("Compulsions",id)
            .then((() => API.getAll("Compulsions")))
            this.props.history.push("/Compulsions/New")
            //this method needs to change to push back to the welcome view after deletion or chart view havent decided yet
    }
    // <FaRegTrashAlt />


    //renders
    render() {
  
        return (           
            <div>
                <div className="mainCard">
                    {/* <CardBody> */}
                        <div>{this.props.compulsion.description}</div>
                    
                        
                        <div className="buttonFlex">
                            <button className="button" type="button" onClick={() => this.handleDelete(this.props.compulsion.compulsionId)}></button>
                        </div>
                    {/* </CardBody> */}
                </div>
            </div>
        );
    }
}

export default withRouter(CompulsionCard);