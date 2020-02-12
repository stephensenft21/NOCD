import React, { Component } from "react";
import API from "../API/dataManager";
import { withRouter } from "react-router-dom";

import { DeleteCompulsion } from "./MaterialComponent/MaterialActionButtons";
// import { Card, Row, CardTitle,Button, CardBody } from "reactstrap";
// import { FaRegTrashAlt } from "react-icons/fa";

class CompulsionCard extends Component {
  handleDelete = id => {
    API.deleteUserData("Compulsions", id).then(() => API.getAll("Compulsions"));
    this.props.history.push("/Compulsions/New");
    //this method needs to change to push back to the welcome view after deletion or chart view havent decided yet
  };
  // <FaRegTrashAlt />

  render() {
    return (
      <div>
        <div>
          <h2 className="mainCard">{this.props.compulsion.description}</h2>

          <div className="buttonFlex">
            <DeleteCompulsion />
            {/* <button className="button" type="button" onClick={() => this.handleDelete(this.props.compulsion.compulsionId)}></button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompulsionCard);
