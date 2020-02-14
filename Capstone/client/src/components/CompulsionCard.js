import React, { Component } from "react";
import API from "../API/dataManager";
import { withRouter } from "react-router-dom";

import { DeleteCompulsion } from "./MaterialComponent/MaterialActionButtons";
class CompulsionCard extends Component {
  handleDelete = id => {
    API.deleteUserData("Compulsions", id).then(() => API.getAll("Compulsions"));
    this.props.history.push("/Compulsions/New");
    //this method needs to change to push back to the welcome view after deletion or chart view havent decided yet
  };
  // <FaRegTrashAlt />

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          
        <strong> <h2 uppercase="true" className="mainCard">{this.props.compulsion.description}</h2> </strong>
          
          <div className="buttonFlex">
            <DeleteCompulsion
              handleDelete={() => this.handleDelete(this.props.compulsion.compulsionId)} />
            {/* <button className="button" type="button" onClick={() => this.handleDelete(this.props.compulsion.compulsionId)}></button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CompulsionCard);
