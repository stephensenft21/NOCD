import React, { Component } from "react";
import RecordCard from "../components/RecordCard";
import API from "../API/dataManager";
import { getUser } from '../API/userManager';
import CompulsionCard from "../components/CompulsionCard";
import "./RecordList.css";
import moment from "moment";
import "./MaterialComponent/MaterialActionButtons";
import {
  SubmitsFunction,
  ResistFunction,
  UndoFunction
} from "./MaterialComponent/MaterialActionButtons";

class RecordList extends Component {
  moment = moment().format("MMMM Do YYYY, h:mm:ss a")
  state = {
    userId: getUser(),
    compulsion: {},
    records: []
  };

  //(https://localhost:5001/api/v1/Compulsion/1?includes=records)
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

  NewPatientActionSubmitted = evt => {
    const newRecord = {
      compulsionId: parseInt(this.props.match.params.compulsionId),
      patientActionId: 2,
    };
    API.PostData("Records", newRecord).then(() =>
      API.getOneResourceWithChild(
        "Compulsions",
        this.props.match.params.compulsionId,
        "Records"
      ).then(data =>
        this.setState({
          compulsion: data,
          records: data.records
        })
      )
    );
  };
  NewPatientActionResist = evt => {
    const newRecord = {
      compulsionId: parseInt(this.props.match.params.compulsionId),
      patientActionId: 1,
     
    };
    API.PostData("Records", newRecord).then(() =>
      API.getOneResourceWithChild(
        "Compulsions",
        this.props.match.params.compulsionId,
        "Records"
      ).then(data =>
        this.setState({
          compulsion: data,
          records: data.records
        })
      )
    );
  };
  NewPatientActionUndo = evt => {
    const newRecord = {
      compulsionId: parseInt(this.props.match.params.compulsionId),
      patientActionId: 3,
    };
    API.PostData("Records", newRecord).then(() =>
      API.getOneResourceWithChild(
        "Compulsions",
        this.props.match.params.compulsionId,
        "Records"
      ).then(data =>
        this.setState({
          compulsion: data,
          records: data.records
        })
      )
    );
  };

  componentDidMount() {
    this.getCompulsionAndPatientsRecordData();
  }

  render() {

    return (
      <>
        <div>
          <CompulsionCard
            compulsion={this.state.compulsion}
            // {...this.props}
            getData={this.getData}
          />{" "}
        </div>

        <div />
        <div className="container">
          <div className="cardBackground">
            <div className="cardContainer UndoActionColor">
              {/* Undo */}
        
              <h1>"UNDO"</h1>
              <h3 className="H3-Border-Undo">Record Action</h3>
              <div className="ActionCard-One ">
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
              <div className="cardButton">
                <UndoFunction NewPatientActionUndo={() => this.NewPatientActionUndo()}  />{" "}
              </div>
            </div>
          </div>

          <div className="cardBackground  ">
            <div className=" cardContainer SubmitsActionColor">
              <h1>"SUBMIT"</h1>
              <h3 className="H3-Border-Submit">Record Action</h3>
              <div className="ActionCard-One ">
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
              <div className="cardButton">
                <SubmitsFunction  NewPatientActionSubmitted={() => this.NewPatientActionSubmitted()} />{" "}
              </div>
            </div>
          </div>

          <div className="cardBackground">
            <div className="cardContainer ResistsActionColor">
              <h1>"RESIST"</h1>
              <h3 className="H3-Border-Resist"> Record Action</h3>
              <div className="ActionCard-One ">
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
              <div className="cardButton">
                <ResistFunction
                NewPatientActionResist={() => this.NewPatientActionResist()} />{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default RecordList;
