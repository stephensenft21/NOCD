import React, { Component } from "react";
import moment from 'moment'
import API from "../API/dataManager";

class Home extends Component {
  moment = moment().format('MMMM Do YYYY, h:mm:ss a');
  state = {
    userId: this.props.userId,
    values: [],
    compulsions: []
  };

  handleNumberfieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = +evt.target.value;
    this.setState(stateToChange);
  };

  getCompulsionsData = () => {
    API.getAll("Compulsions").then(data => {
      console.log(data);
      this.setState({
        compulsions: data
      });
    });
  };
  MakeANewCompulsion = evt => {
    evt.preventDefault();
    const newCompulsion = {
      userId: this.props.userId
    };
    alert("You have successfully made a new compulsion");
    API.postData("Compulsions", newCompulsion).then(() =>
      API.getAll().then(data => this.setState({ compulsions: data }))
    );
  };

  componentDidMount() {
    this.getCompulsionsData();
  }

  render() {
    return (
      <>
        <h1>Welcome to my app</h1>
        <div>
          <select id="compulsions" onChange={this.handleNumberfieldChange}>
            {this.state.compulsions.map(compulsion => (
              <option key={compulsion.id} value={compulsion.id}>
                {compulsion}
              </option>
            ))}
          </select>
        
            {" "}
            <button
              variant="contained"
              color="primary"
              onClick={this.constructNewCheckIn}
            >
              Submit
            </button>
         
        </div>
        <ul>
        
        </ul>
      </>
    );
  }
}

export default Home;

// const authHeader = createAuthHeaders();
// fetch('/api/v1/values', {
//   headers: authHeader
// })
//   .then(response => response.json())
//   .then(values => {
//     this.setState({ values: values });
//   });
