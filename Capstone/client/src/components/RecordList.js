import React, { Component } from "react";
import RecordCard from "../components/RecordCard";
import API from "../API/dataManager";
import CompulsionCard from "../components/CompulsionCard";
import "./RecordList.css";
import "./MaterialComponent/MaterialActionButtons"
import {SubmitsFunction,ResistFunction,UndoFunction,DeleteCompulsion} from './MaterialComponent/MaterialActionButtons'

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
      <>
      <div>
        <CompulsionCard
          props={this.props}
          compulsion={this.state.compulsion}
          {...this.props}
          getData={this.getData}
        /> </div>
      

        <div />
<div className="container">
        <div className="cardBackground">
          <div className="cardContainer">
              <h2>Patient Undo</h2>
            <div className="ActionCard-One">
              {this.state.records
                .filter(record => {
                  return record.patientActionId === 3;
                })
                .map((filteredRecord, i) => (
                  <RecordCard
                    getCompulsionAndPatientsRecordData={
                      this.getCompulsionAndPatientsRecordData
                    }
                    key={i}
                    record={filteredRecord}
                    {...this.props}
                    getData={this.getData}
                  />
                ))}
            </div>
            <div className="cardButton"><UndoFunction/> </div>
          </div>
        </div>

        <div className="cardBackground">
          <div className="cardContainer">
              <h2>Patient Submits</h2>
            <div className="ActionCard-One">
              {this.state.records
                .filter(record => {
                  return record.patientActionId === 2;
                })
                .map((filteredRecord, i) => (
                  <RecordCard
                    getCompulsionAndPatientsRecordData={
                      this.getCompulsionAndPatientsRecordData
                    }
                    key={i}
                    record={filteredRecord}
                    {...this.props}
                    getData={this.getData}
                  />
                  ))}
            </div>
                 <div className="cardButton"><SubmitsFunction/> </div>
          </div>
        </div>

        <div className="cardBackground">
          <div className="cardContainer">
            <h2>Patient Resists</h2>
            <div className="ActionCard-One">
              {this.state.records
                .filter(record => {
                  return record.patientActionId === 1;
                })
                .map((filteredRecord, i) => (
                  <RecordCard
                    getCompulsionAndPatientsRecordData={
                      this.getCompulsionAndPatientsRecordData
                    }
                    key={i}
                    record={filteredRecord}
                    {...this.props}
                    getData={this.getData}
                  />
                ))}
            </div>
          <div className="cardButton"><ResistFunction/> </div>
          </div>
        </div>
      </div>
     </>
    );
  }
}
export default RecordList;
