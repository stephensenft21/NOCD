import React, { Component } from "react";
import moment from "moment";
import API from "../API/dataManager";
import CircularIntegration from "./MaterialComponent/MaterialSubmitButton";
import SimpleSnackbar from "./MaterialComponent/MaterialSnackBar";
import SimpleSelect from "./MaterialComponent/MaterialDropDown";
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

  handleNumberfieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = +evt.target.value;
    this.setState(stateToChange);
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    console.log(evt.target)
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
        <h1>How are you feeling today?</h1>
        <div>
          <form>
            <SimpleSnackbar
              open={this.state.open}
              onClick={this.MakeANewCompulsion}
              handleClose={this.handleClose}
            />

            {this.state.compulsions.length > 0 ? (
              <>
                {" "}
                <SimpleSelect
                  handleNumberfieldChange={this.handleNumberfieldChange}
                  compulsions={this.state.compulsions}
                  description ={this.state.description}
                  compulsionId={this.state.compulsionId}
                  {...this.props}
                  key={this.compulsionId}
                />
                <CompulsionsInStateInputField
                  handleFieldChange={this.handleFieldChange}
                />
                {/* This Component below is the save button for the input field above */}
                <CircularIntegration
                  MakeANewCompulsion={this.MakeANewCompulsion}
                />
              </>
            ) : (
              <>
                <NoCompulsionsInStateInputField
                  handleFieldChange={this.handleFieldChange}
                />
                <CircularIntegration
                  MakeANewCompulsion={this.MakeANewCompulsion}
                />

                {/* <button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={this.MakeANewCompulsion}
                >
  
                  Submit
                </button> */}
              </>
            )}
          </form>
        </div>
        <ul></ul>
      </>
    );
  }
}

export default Home;
