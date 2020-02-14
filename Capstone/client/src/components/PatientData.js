import React, { Component } from "react";
import API from "../API/dataManager";
import {CompulsionSelect} from "./MaterialComponent/MaterialDropDown";
import {withRouter} from 'react-router-dom'


class PatientAction extends Component {
  state = {
    compulsions:[],
    compulsionId: 0
  ,description: "",
  records:[],
  compulsion: {},
  };

  handleNumberfieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = +evt.target.value;
    this.setState(stateToChange);
    this.props.history.push(`/PatientData/${evt.target.value}`)
  };
  componentDidMount() {
    let compulsions = [];
    API.getAll("Compulsions").then(compulsion => {
      compulsions = compulsion;
      this.setState({ compulsions: compulsions })
    });
 
  
  }

 
  // getCompulsionAndPatientsRecordData = () => {
  //   API.getOneResourceWithChild(
  //     "Compulsions",
  //     this.props.match.params.compulsionId,
  //     "Records"
  //   ).then(data => {
  //     console.log(data);
  //     this.setState({
  //       compulsion: data,
  //       records: data.records
  //     });
  //   });
  // };

  render() {
    return (
      <>
       <h1>Select Compulsion to view Action History</h1>
        
          <form autoComplete="off">
            {/* Message = "Great job! You added a new compulsion!" */}
            {/* <HomeSnackbar
              open={this.state.open}
              onClick={this.MakeANewCompulsion}
              handleClose={this.handleClose}
            /> */}

        
                <CompulsionSelect
                  handleNumberfieldChange={this.handleNumberfieldChange}
                  compulsions={this.state.compulsions}
                  description={this.state.description}
                  compulsionId={this.state.compulsionId}
                  {...this.props}
                  key={this.compulsionId}
                />
           
        {/* <Grid item xs={4}>
          <ActionPieChart records={this.state.records} />
          </Grid>
          <Grid item xs={4}>
          <ActionBarChart records={this.state.records} />
          </Grid>
          <Grid item xs={4}>
          <ActionLineChart records={this.state.records} />
        </Grid> */}
        </form>
      </>
    );
  }
} export default PatientAction;
