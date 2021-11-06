import React, { Component } from 'react'
import Title from '../../components/title/Title'
import './SignUp.scss'
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import account from "../../assets/signup/account.svg"

export class SignUp extends Component {
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
                <TextField margin="normal" size="small" id="first-name" label="First name" variant="outlined" />
                <TextField margin="normal" size="small" id="last-name" label="Last name" variant="outlined" />
              </div>

              <TextField fullWidth helperText="You can use letters, numbers & periods" margin="normal" size="small" label="Username" id="username" />

              <div className="first-button">
                <Button className="use-email" style={{ textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh' }} fullWidth size="small">Use my current email address instead</Button>
              </div>

              <div className="name-input">
                <TextField margin="normal" size="small" id="password" label="Password" variant="outlined" />
                <TextField margin="normal" size="small" id="confirm" label="Confirm" variant="outlined" />
              </div>
              <p className="password-description">Use 8 or more characters with a mix of letters, numbers & symbols</p>

              <div className="check-box">
                <Checkbox required />
                <span className="show-password">Show Password</span>
              </div>

              <div className="sign-in">
                    <Button style={{ textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh' }} size="small">Sign in instead</Button>
                    <Button variant="contained" size="medium">Next</Button>
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
