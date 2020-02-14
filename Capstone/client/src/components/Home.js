import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import API from "../API/dataManager";
import { CircularIntegration } from "./MaterialComponent/MaterialSubmitButton";
import { HomeSnackbar } from "./MaterialComponent/MaterialSnackBar";
import { SimpleSelect } from "./MaterialComponent/MaterialDropDown";
import {
  CompulsionsInStateInputField,
  NoCompulsionsInStateInputField
} from "./MaterialComponent/MaterialInputs";
class Home extends Component {
  moment = moment().format("MMMM Do YYYY, h:mm:ss a");

  state = {
    userId: this.props.userId,
    values: [],
    compulsions: [],
    compulsionId: 0,
    description: "",
    collapse: false,
    loadingStatus: false,
    open: false
  };


  
  toggle = () => this.setState({ collapse: !this.state.collapse });

  handleNumberfieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = +evt.target.value;
    this.setState(stateToChange);
    this.props.history.push(`/Compulsion/${evt.target.value}`);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    console.log(evt.target);
  };

  MakeANewCompulsion = evt => {
    if (this.state.description === "") {
      window.alert("Please fill out empty form fields");
    } else {
      const newCompulsion = {
        userId: this.props.userId,
        description: this.state.description
      };
      API.PostData("Compulsions", newCompulsion).then(() =>
        API.getAll("Compulsions").then(data =>
          this.setState({ compulsions: data, open: true })
        )
      );

      // .then(this.props.history.push(`/Compulsions/${this.state.compulsionId}`))
      //Im trying to grab the selected compulsionId and push to that view. Having issues
    }
  };

  componentDidMount() {
    let compulsions = [];
    API.getAll("Compulsions").then(compulsion => {
      compulsions = compulsion;
      this.setState({ compulsions: compulsions });
    });
  }
  handleClose = event => {
    API.getAll("Compulsions").then(data =>
      this.setState({ compulsions: data, open: false })
    );
  };

  render() {
    return (
      <>
        <img src={require("./IMG/logo.png")} className="logo" alt="NoCD" />
       
        <div>
    
          <form autoComplete="off">
        
            {/* Message = "Great job! You added a new compulsion!" */}
            <HomeSnackbar
              open={this.state.open}
              onClick={this.MakeANewCompulsion}
              handleClose={this.handleClose}
            />

            {this.state.compulsions.length > 0 ? (
              <>
                  <h3>Welcome Back!</h3>
                  <h1>How are you feeling today?</h1>
                {" "}
                <CompulsionsInStateInputField
                  handleFieldChange={this.handleFieldChange}
                />
                <SimpleSelect
                  handleNumberfieldChange={this.handleNumberfieldChange}
                  compulsions={this.state.compulsions}
                  description={this.state.description}
                  compulsionId={this.state.compulsionId}
                  {...this.props}
                  key={this.compulsionId}
                />
                {/* This Component below is the save button for the input field above */}
                <CircularIntegration
                  MakeANewCompulsion={this.MakeANewCompulsion}
                />
              </>
            ) : (
              <>
                    <h1><i>Welcome! </i></h1><h2><i>Lets begin</i></h2>
                   
                    <h3><i>(How are you feeling today?)</i></h3>
               {/* <h1>How are you feeling today?</h1> */}
                <NoCompulsionsInStateInputField
                  handleFieldChange={this.handleFieldChange}
                />
                <CircularIntegration
                  MakeANewCompulsion={this.MakeANewCompulsion}
                />
              </>
            )}
          </form>
        </div>
        <ul></ul>
      </>
    );
  }
}

export default withRouter(Home);
