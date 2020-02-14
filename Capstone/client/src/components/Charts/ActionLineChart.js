
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class ActionLineChart extends Component {
    render() {
        const Resisted =  this.props.records.filter(r => r.PatientActionId === 1).length
        const Submitted =  this.props.records.filter(r => r.PatientActionId === 2).length
        const Undo =  this.props.records.filter(r => r.PatientActionId === 3).length

        
        const data = {
            
            labels: ["Submitted", "Resisted", "Undo",],
            datasets: [
                {
                    label: "Actions",
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
            <div>
                <Line
                    data={data}
                    width={500}
                    height={400}
                //options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}