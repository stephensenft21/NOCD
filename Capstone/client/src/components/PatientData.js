import React, { Component } from "react";
import APIManager from "../API/dataManager";
import ActionPieChart from "./Charts/ActionPieChart";
import ActionBarChart from "./Charts/ActionBarChart";
import ActionLineChart from "./Charts/ActionLineChart";
import CompulsionSelect from "@material-ui/core/Select";
import {withRouter} from 'react-router-dom'
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class PatientAction extends Component {
  state = {
    compulsions:[],
    compulsionId: 0
  
  };

  handleNumberfieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = +evt.target.value;
    this.setState(stateToChange);
    this.props.history.push(`/Compulsion/${evt.target.value}`);
  };


  componentDidMount() {
    let submits = [];
    let resists = [];
    let undo = [];
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
       <CompulsionSelect
                  handleNumberfieldChange={this.handleNumberfieldChange}
                  compulsions={this.state.compulsions}
                  description={this.state.description}
                  compulsionId={this.state.compulsionId}
                  {...this.props}
                  key={this.compulsionId}
                />
        <Grid item xs={4}>
          <ActionPieChart records={this.state.records} />
        </Grid>
        <Grid item xs={4}>
          <ActionBarChart records={this.state.records} />
        </Grid>
        <Grid item xs={4}>
          <ActionLineChart records={this.state.records} />
        </Grid>
      </>
    );
  }
} export default withRouter(PatientAction);
