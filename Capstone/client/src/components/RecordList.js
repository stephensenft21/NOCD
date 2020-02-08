import React, { Component } from 'react';
import RecordCard from '../components/RecordCard'
import API from '../API/dataManager'

class RecordList extends Component {

    state = {
        compulsion: [],
        records: []
    }

    
//(https://localhost:5001/api/v1/Compulsion/1?includes=ecords)
getCompulsionAndPatientsRecordData = () => {
        API.getOneResourceWithChild("Compulsion",this.props.match.params.CompulsionId,"Records").then((data) => {
			this.setState({
                compulsion: data,
                records: data
			})
		})
	}
	
	componentDidMount() {
		this.getCompulsionAndPatientsRecordData()
	}


    render() {
	
		return (     
					<div  className='mainContainer'>
                        	{this.state.compulsion.map(compulsion => (
                    <compulsionCard
					key={compulsion.id}
					compulsion={compulsion}
					{...this.props}
					getData={this.getData}
					/>
					))}
			<div className='sectionHeader'>
					<h1>Patient Records</h1>
				{this.state.comments.map(record => (
                    <RecordCard
					key={record.id}
					record={record}
					{...this.props}
					getData={this.getData}
					/>
					))}
                    </div>
					</div>
				
		);
	

                }



} export default RecordList 