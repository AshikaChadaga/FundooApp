import React, { Component } from 'react'
import Title from '../../components/title/Title'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import './ResetPassword.scss'

export class ResetPassword extends Component {
    render() {
        return (
            <div>
                <div className="sign-in-page">
                    <div className="title">
                        <Title></Title>
                    </div>
                    <h1 className="signin-title">Reset Password</h1>
                    <h3 className="signin-sub">Enter your new Password</h3>
                    <div className="form">

                        <div className="name-input">
                            <TextField fullWidth margin="normal" size="small" id="new-password" label="New password" variant="outlined" />
                            <TextField fullWidth margin="normal" size="small" id="confirm-password" label="Confirm new password" variant="outlined" />
                        </div>

                        <div className="reset-password">
                            <Button fullWidth style={{ paddingLeft: '1px', paddingRight: '1px', textTransform:'none'}} variant="contained" size="medium">Reset Password</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword
