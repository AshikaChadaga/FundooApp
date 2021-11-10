import React, { Component } from 'react'
import Title from '../../components/title/Title'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import './ResetPassword.scss'
import UserService from '../../service/UserService';

const userService = new UserService();

export class ResetPassword extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newPassword: "",
            confirmPassword: "",
            newPasswordError: false,
            confirmPasswordError: false
        };
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;

        errors.newPasswordError = this.state.newPassword !== "" ? false : true;
        errors.confirmPasswordError = this.state.confirmPassword !== "" ? false : true;

        this.setState({
            ...errors
        });

        return (isError = errors.newPasswordError || errors.confirmPasswordError);
    };

    validate = () => {
        var isValid = this.isValidated();
        console.log(this.state);
        const url = window.location.href;

        if (!isValid) {
            console.log("Validation Successfull!!");
            const urlArray = url.split("/");
            
            let data = {
                "newPassword": this.state.newPassword
            };
            let config = {
                headers: {
                    'Authorization': urlArray[urlArray.length-1]
                }
            };
            userService.resetPassword("/user/reset-password", data, config)
                .then(() => {
                    console.log("Password Changed!");
                    this.props.history.push('/signin');
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
                    <h1 className="signin-title">Reset Password</h1>
                    <h3 className="signin-sub">Enter your new Password</h3>
                    <div className="form">

                        <div className="name-input">
                            <TextField
                                type="password"
                                fullWidth
                                margin="normal"
                                size="small"
                                id="new-password"
                                label="New password"
                                variant="outlined"
                                name="newPassword"
                                error={this.state.newPasswordError}
                                helperText={this.state.newPasswordError ? "Enter new Password" : ""}
                                onChange={(e) => this.changeHandler(e)}
                            />
                            <TextField
                                fullWidth
                                type="password"
                                margin="normal"
                                size="small"
                                id="confirm-password"
                                label="Confirm new password"
                                variant="outlined"
                                name="confirmPassword"
                                error={this.state.confirmPasswordError}
                                helperText={this.state.confirmPasswordError ? "Confirm Password" : ""}
                                onChange={(e) => this.changeHandler(e)}
                            />
                        </div>

                        <div className="reset-password">
                            <Button
                                fullWidth
                                style={{
                                    paddingLeft: '1px',
                                    paddingRight: '1px',
                                    textTransform: 'none'
                                }}
                                variant="contained"
                                size="medium"
                                onClick={this.validate}
                            >Reset Password</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetPassword
