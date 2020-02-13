import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { login } from '../API/userManager';
import {LoginSubmitButton} from './MaterialComponent/MaterialSubmitButton'
import {LoginPasswordInput,LoginEmailInput} from './MaterialComponent/MaterialInputs'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {LoginSnackbar} from './MaterialComponent/MaterialSnackBar'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: [],
    open: false
  }

  submit = (event) => {
     event.preventDefault();

    login({
      email: this.state.email,
      password: this.state.password,
    })
      .then((user) => {
        this.props.onLogin(user);
        this.props.history.push('/Compulsions/New');
      })
      .catch(err => {
        this.setState({ errors: err.messages });
      });
  }

  handleInputChange = (event) => {
    console.log(event)
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleClose = event => {
   
      this.setState({ open: false })
    
  };


  render() {
    return (
      <form   onSubmit={this.submit}>
          <img src={require("./IMG/logo.png")} className="logo loginLogo" alt="NoCD" />
        <h1>Login</h1>
        {/* <LoginSnackbar
              open={this.state.open}
              handleClose={this.handleClose}
            /> */}
        <LoginEmailInput
        handleInputChange={this.handleInputChange}/>
        <LoginPasswordInput
        handleInputChange={this.handleInputChange}/>
        <LoginSubmitButton />
        {/* <button type="submit">Log in</button> */}
        <p>
          Not yet a user? <Link to="/register"> {""}<PersonAddIcon/></Link>
        </p>
        <ul>
          {
            this.state.errors ? this.state.errors.map((message, i) => (
              <li key={i}>{message}</li>
            )) : null
          }
        </ul>
      </form>
    );
  }
}

export default withRouter(Login);