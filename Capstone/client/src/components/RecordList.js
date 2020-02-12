import React, { Component } from "react";
import RecordCard from "../components/RecordCard";
import API from "../API/dataManager";
import CompulsionCard from "../components/CompulsionCard";
import './RecordList.css'

class RecordList extends Component {
  state = {
    compulsion: [],
    records: []
  };

  //(https://localhost:5001/api/v1/Compulsion/1?includes=ecords)
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
    return (
      <div>
        <CompulsionCard
          props={this.props}
          compulsion={this.state.compulsion}
          {...this.props}
          getData={this.getData}
        />

        <div />
          <div className="cardContainer">
            
        <div className="sectionHeader">
          <h1>Patient Action Undo</h1>
          {this.state.records
            .filter(record => {
              return record.patientActionId === 3;
            })
            .map((filteredRecord, i) => (
              <RecordCard
              getCompulsionAndPatientsRecordData={this.getCompulsionAndPatientsRecordData}
                key={i}
                record={filteredRecord}
                {...this.props}
                getData={this.getData}
                />
            ))}
        </div>
        <div className="sectionHeader">
          <h1>Patient Action Submits</h1>
          {this.state.records
            .filter(record => {
              return record.patientActionId === 2;
            })
            .map((filteredRecord, i) => (
              <RecordCard
              getCompulsionAndPatientsRecordData={this.getCompulsionAndPatientsRecordData}
              key={i}
              record={filteredRecord}
              {...this.props}
              getData={this.getData}
              />
              ))}
        </div>
        <div className="sectionHeader">
          <h1>Patient Action Resists</h1>
          {this.state.records
            .filter(record => {
              return record.patientActionId === 1;
            })
            .map((filteredRecord, i) => (
              <RecordCard
              getCompulsionAndPatientsRecordData={this.getCompulsionAndPatientsRecordData}
              key={i}
              record={filteredRecord}
              {...this.props}
              getData={this.getData}
              />
              ))}
        </div>
      </div>
              </div>
    );
  }
}
export default RecordList;
