import React, { Component } from "react";
import API from "../API/dataManager";
import ActionPieChart from "./Charts/ActionPieChart";
import ActionBarChart from "./Charts/ActionBarChart";
import ActionLineChart from "./Charts/ActionLineChart";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import "./DashBoard.css"
class Dashboard extends Component {
  state = {
    compulsion: {},
    records: [],
    compulsionId: 0
  };

  getCompulsionAndPatientsRecordData = () => {
    API.getOneResourceWithChild(
      "Compulsions",
      this.props.match.params.compulsionId,
      "Records"
    ).then(data => {
      console.log(data);
      this.setState({
        compulsion: data,
        records: data.records
      });
    });
  };

  componentDidMount() {
    this.getCompulsionAndPatientsRecordData();
  }

  render() {
    console.log("This is from Dashboard", this.props);
    return (
      <>
        <h1>Compulsion({this.state.compulsion.description})</h1>
        <Grid
          direction={"column"}
          justify="flex-start"
          container
          alignItems={"center"}
        >
          <Grid item xs={7}>
            <ActionPieChart records={this.state.records} />
          </Grid>
{/* <hr className="DashBoard-Divider-Yellow"></hr>
<hr className="DashBoard-Divider-Red"></hr> */}
<hr className="DashBoard-Divider-Blue"></hr>
          <Grid
            direction={"column"}
            justify="flex-start"
            container
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <ActionBarChart records={this.state.records} />
            </Grid>
          </Grid>

          {""}
          <hr className="DashBoard-Divider-Blue"></hr>
          {""}

          <Grid
            direction={"column"}
            justify="flex-start"
            container
            alignItems={"center"}
          >
            <Grid item xs={4}>
              <ActionLineChart records={this.state.records} />
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default withRouter(Dashboard);
