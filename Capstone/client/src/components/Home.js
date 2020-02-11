import React, { Component } from "react";
import moment from "moment";
import API from "../API/dataManager";
import Snackbar from "@material-ui/core/Snackbar";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import SimpleSelect from "../components/AlertComponent/MaterialDropDown";
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
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  MakeANewCompulsion = evt => {
    evt.preventDefault();

    if (this.state.description === "") {
      window.alert("Please fill out all form fields");
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
    console.log("this is compulsionarray", compulsions);

    API.getAll("Compulsions").then(compulsion => {
      compulsions = compulsion;
      this.setState({ compulsions: compulsions });
      console.log("this is new state", compulsions);
    });
  }

  render() {
    return (
      <>
        <h1>How are you feeling today?</h1>
        <div>
          <form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={this.state.open}
              autoHideDuration={6000}
              message="Great job! You added a new compulsion!"
            />
            {this.state.compulsions.length > 0 ? (
              <>
                {" "}
                <SimpleSelect
                  onChange={this.handleNumberfieldChange}
                  compulsions={this.state.compulsions}
                  compulsionId={this.state.compulsionId}
                  {...this.props}
                />
              </>
            ) : (
              <>
                <input
                  id="description"
                  onChange={this.handleFieldChange}
                ></input>

                <button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={this.MakeANewCompulsion}
                >
  
                  Submit
                </button>
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
