import React, { Component } from 'react'
import Title from '../../components/title/Title'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import './ForgotEmail.scss'
import UserService from '../../service/UserService';

const userService = new UserService();

export class ForgotEmail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailOrPhone: "",
      emailOrPhoneError: false,
    };
  }

  isValidated = () => {
    let isError = false;
    const errors = this.state;

    errors.emailOrPhoneError = this.state.emailOrPhone !== "" ? false : true;

    this.setState({
      ...errors
    });

    return (isError = errors.emailOrPhoneError);
  };

  validate = () => {
    var isValid = this.isValidated();
    console.log(this.state);
    if (!isValid) {
      console.log("Validation Successfull!!");
      let data = {
        "email": this.state.emailOrPhone
      };
      userService.reset("/user/reset", data)
        .then(() => {
          console.log("Email found!")
        })
        .catch(error => {
          console.error('Error encountered!', error);
        });
    }
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="sign-in-page">
          <div className="title">
            <Title></Title>
          </div>
          <h1 className="signin-title">Find your email</h1>
          <h3 className="signin-sub">Enter your phone number or recovery email</h3>
          <div className="form">

            <div className="name-input">
              <TextField
                fullWidth margin="normal"
                size="medium"
                label="Phone number or email"
                variant="outlined"
                name="emailOrPhone"
                error={this.state.emailOrPhoneError}
                helperText={this.state.emailOrPhoneError ? "Enter Phone number or Email" : ""}
                onChange={(e) => this.changeHandler(e)} />
            </div>

            <div className="forgot-email">
              <Button
                style={{
                  paddingLeft: '1px',
                  paddingRight: '1px'
                }}
                variant="contained"
                size="medium"
                onClick={this.validate}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotEmail
