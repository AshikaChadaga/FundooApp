import React, { Component } from 'react'
import Title from '../../components/title/Title'
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'
import './SignIn.scss'

export class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="sign-in-page">
                    <div className="title">
                        <Title></Title>
                    </div>
                    <h1 className="signin-title">Sign in</h1>
                    <h3 className="signin-sub">Use your Fundoo Account</h3>
                    <div className="form">

                        <div className="name-input">
                            <TextField fullWidth margin="normal" size="medium" id="Email or phone" label="Email or phone" variant="outlined"/>
                            <Button style={{ textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh', backgroundColor: "#fff", paddingLeft:'0%'}} size="small">Forgot email?</Button>
                        </div>

                        <div className="learn-section">
                            <p className="helper">Not your computer? Use Guest mode to sign in privately.</p>
                            <Button style={{ textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh', backgroundColor: "#fff", paddingLeft:'0%'}} size="small">Learn more</Button>
                        </div>

                        <div className="sign-in">
                            <Button style={{textTransform: 'none', fontWeight: 'bolder', fontSize: '1.5vh'}} size="small">Create account</Button>
                            <Button style={{paddingLeft:'1px', paddingRight:'1px'}} variant="contained" size="medium">Next</Button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default SignIn
