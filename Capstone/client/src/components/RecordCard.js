import React, { Component } from 'react';
import API from '../API/dataManager'
import Moment from 'moment';
 import { DeleteRecord } from "./MaterialComponent/MaterialActionButtons";


class RecordCard extends Component {
   

    DeleteRecord = (id) => {
        API.deleteUserData("Records",id)
            .then(() => this.props.getCompulsionAndPatientsRecordData())
    }


    //renders
    render() {
        let timeStamp = Moment(this.props.record.timeStamp).fromNow();
        return (
            <div>
                <div className="mainCard RecordCard">
                    <div className="cardColumn">
                        <div>{this.props.record.length}</div>
                        <div className="recordTimeStamp"> {timeStamp}  </div >
                        
                        <div className="recordCardButtonFlex">
                        {/* <DeleteRecord DeleteRecord ={() => this.DeleteRecord(this.props.record.recordId)}/> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecordCard;