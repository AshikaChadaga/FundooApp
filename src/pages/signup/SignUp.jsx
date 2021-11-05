import React, { Component } from 'react'
import Title from '../../components/title/Title'
import './SignUp.scss'
import Box from '@mui/material/Box'
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import account from "../../assets/signup/account.svg"
import InputAdornment from '@mui/material/InputAdornment';

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

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { marginRight: 2, width: '8.5vw' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField margin="normal" size="small" id="first-name" label="First name" variant="outlined" />
                <TextField margin="normal" size="small" id="last-name" label="Last name" variant="outlined" /><br />
              </Box>

              <Box
                sx={{
                  width: "18vw",
                  maxWidth: '100%'
                }}
              >
                <TextField defaultValue="@gmail.com" fullWidth helperText="You can use letters, numbers & periods" margin="normal" size="small" label="Username" id="username" />
              </Box>

              <Box sx={{ "& button": { maxWidth: "61%" } }}>
                <div className="first-button">
                  <Button style={{ textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh' }} fullWidth size="small">Use my current email address instead</Button>
                </div>
              </Box>
              <br />
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { marginRight: 2, width: '8.5vw' },
                }}
                noValidate
                autoComplete="off"

              >
                <TextField margin="normal" size="small" id="password" label="Password" variant="outlined" />
                <TextField margin="normal" size="small" id="confirm" label="Confirm" variant="outlined" /><br />
              </Box>
              <p className="password-description">Use 8 or more characters with a mix of letters, numbers & symbols</p>

              <Checkbox required />
              <span className="show-password">Show Password</span>

              <br />
              <div className="sign-in">
                <Box sx={{ "& button": { marginLeft: 1, marginRight: 13 } }}>
                  <div>
                    <Button style={{ textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh' }} size="small">Sign in instead</Button>
                    <Button variant="contained" size="medium">Next</Button>
                  </div>
                </Box>
              </div>

            </div>

          </div>

          <div class="image-div">
            <img class="acount-image" src={account} alt="Account" />
            <p class="mail-description">One account. All of FunDoo working for you.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
