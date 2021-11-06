import React, { Component } from 'react'
import Title from '../../components/title/Title'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import './ForgotEmail.scss'

export class ForgotEmail extends Component {
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
              <TextField fullWidth margin="normal" size="medium" label="Phone number or email" variant="outlined" />
            </div>

            <div className="sign-in">
              <Button style={{ paddingLeft: '1px', paddingRight: '1px' }} variant="contained" size="medium">Next</Button>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default ForgotEmail
