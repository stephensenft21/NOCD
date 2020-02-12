import React, { Component } from 'react';
import API from '../API/dataManager'
import Moment from 'moment';


class RecordCard extends Component {
   

    handleDelete = (id) => {
        API.deleteUserData("Records",id)
            .then(() => this.props.getCompulsionAndPatientsRecordData())
    }


    //renders
    render() {
        let timeStamp = Moment(this.props.record.timeStamp).fromNow();
        return (
            <div>
                <div className="mainCard">
                    <div>
                        <div>{this.props.record.id}</div>
                        <div> {timeStamp}  </div >
                        
                        <div className="buttonFlex">
                            <button className="button" type="button" onClick={() => this.handleDelete(this.props.record.recordId)}></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecordCard;