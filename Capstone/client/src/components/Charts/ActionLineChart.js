
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class MotivationChart extends Component {
    render() {
        const Resisted =  this.props.record.filter(r => r.PatientActionId === 1).length
        const Submitted =  this.props.record.filter(r => r.PatientActionId === 2).length
        const Undo =  this.props.record.filter(r => r.PatientActionId === 3).length

        
        const data = {
            
            labels: ["Motivated", "UnMotivated", "Productive", "UnProductive"],
            datasets: [
                {
                    label: "Motivation",
                    data: [Submitted, Resisted, Undo],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                }
            ]
        }
        return (
            <div >
                <Line
                    data={data}
                    width={150}
                    height={150}
                //options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}