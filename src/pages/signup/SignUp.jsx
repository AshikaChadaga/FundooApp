import React, { Component } from 'react'
import Title from '../../components/title/Title'
import './SignUp.scss'
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import account from "../../assets/signup/account.svg"
import UserService from '../../service/UserService';

const userService = new UserService();

export class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirm: "",
      firstNameError: false,
      lastNameError: false,
      usernameError: false,
      passwordError: false,
    };
  }

  isValidated = () => {
    let isError = false;
    const errors = this.state;

    errors.firstNameError = this.state.firstName !== "" ? false : true;
    errors.lastNameError = this.state.lastName !== "" ? false : true;
    errors.usernameError = this.state.username !== "" ? false : true;
    errors.passwordError = this.state.password !== "" ? false : true;

    this.setState({
      ...errors
    });

    return (isError = errors.firstNameError || errors.lastNameError || errors.usernameError || errors.passwordError);
  };

  validate = () => {
    var isValid = this.isValidated();
    console.log(this.state);
    if (!isValid) {
      console.log("Validation Successfull!!");
      let data = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName,
        "email": this.state.username,
        "password": this.state.password,
        "service": "advance",
      };
      userService.registration("/user/userSignUp", data)
        .then(() => {
          console.log("User Resigtered!")
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
        <div className="signup">
          <div className="form-div">
            <div>
              <Title></Title>
            </div>
            <h1 className="signup-title">Create your FunDoo Account</h1>
            <div className="form">

              <div className="name-input">
                <TextField
                  name="firstName"
                  margin="normal"
                  size="small"
                  id="first-name"
                  label="First name"
                  variant="outlined"
                  error={this.state.firstNameError}
                  helperText={this.state.firstNameError ? "Enter first name" : ""}
                  onChange={(e) => this.changeHandler(e)}
                />
                <TextField
                  name="lastName"
                  margin="normal"
                  size="small"
                  id="last-name"
                  label="Last name"
                  variant="outlined"
                  error={this.state.lastNameError}
                  helperText={this.state.lastNameError ? "Enter last name" : ""}
                  onChange={(e) => this.changeHandler(e)}
                />
              </div>

              <TextField
                name="username"
                fullWidth
                margin="normal"
                size="small"
                label="Username"
                id="username"
                error={this.state.usernameError}
                helperText={this.state.usernameError ? "Choose a Gmail address" : "You can use letters, numbers & periods"}
                onChange={(e) => this.changeHandler(e)}
              />

              <div className="first-button">
                <Button
                  className="use-email"
                  style={{
                    textTransform: 'none',
                    fontWeight: 'bolder',
                    fontSize: '1.5vh'
                  }}
                  fullWidth
                  size="small">Use my current email address instead</Button>
              </div>

              <div className="name-input">
                <TextField
                  name="password"
                  margin="normal"
                  size="small"
                  id="password"
                  label="Password"
                  variant="outlined"
                  error={this.state.passwordError}
                  helperText={this.state.passwordError ? "Enter password" : ""}
                  onChange={(e) => this.changeHandler(e)}
                />

                <TextField
                  name="confirm"
                  margin="normal"
                  size="small"
                  id="confirm"
                  label="Confirm"
                  variant="outlined" />
              </div>
              <p className="password-description">Use 8 or more characters with a mix of letters, numbers & symbols</p>

              <div className="check-box">
                <Checkbox required />
                <span className="show-password">Show Password</span>
              </div>

              <div className="sign-in">
                <Button
                  style={{
                    textTransform: 'none',
                    fontWeight: 'bolder',
                    fontSize: '1.5vh'
                  }}
                  size="small">Sign in instead</Button>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={this.validate}
                >Next</Button>
              </div>
            </div>
          </div>

          <div className="image-div">
            <img className="acount-image" src={account} alt="Account" />
            <p className="mail-description">One account. All of FunDoo working for you.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
