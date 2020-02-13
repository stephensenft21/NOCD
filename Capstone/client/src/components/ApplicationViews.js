// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import Home from '../components/Home'
// import PatientData from '../components/PatientData'
// import RecordList from '../components/RecordList'

// export default class ApplicationViews extends Component {
//     render() {

//         return (
//             <>
//                 {/* <Route exact path='/' render={(props) => {
//                     return <{...this.props} {...props} />
//                 }} /> */}
//                 {/* <Route exact path='/Compulsions/New' render={(props) => {
//                     return <Home {...this.props} {...props} />
//                 }} /> */}
//                 <Route exact path='/PatientData/(\d+)' render={(props) => {
//                     return < PatientData {...this.props} {...props} />
//                 }} />
//                 <Route exact path='/Compulsion/(\d+)' render={(props) => {
//                     return <RecordList {...this.props} {...props}/> 
//                 }} />
//                   <Route exact path='/Records' render={(props) => {
//                     return <RecordList {...this.props} {...props}/> 
//                 }} />

//             </>

//         )
//     }
// }