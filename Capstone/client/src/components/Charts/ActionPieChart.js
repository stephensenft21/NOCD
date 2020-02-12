import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';



export default class ActionChart extends Component {
    render() {
        const Submitted =  this.props.record.filter(r => r.PatientActionId === 2).length
        const Resisted =  this.props.record.filter(r => r.PatientActionId === 1).length
        const Undo =  this.props.record.filter(r => r.PatientActionId === 3).length
                                                      //using a filter and .length
        const data = {
            labels: ["Submitted", "Resisted", "Undo",],
            datasets: [
                {
                    label: "Compulsion Data",
                    data: [Submitted, Resisted, Undo],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                }
            ]
        }
        return (
            <div >
                <Doughnut
                    data={data}
                    width={150}
                    height={150}
                   // options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}