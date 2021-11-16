import React, { Component } from 'react'
import Title from '../../components/title/Title'
import Button from "@mui/material/Button"
import TextField from '@mui/material/TextField'
import './SignIn.scss'
import UserService from '../../service/UserService';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Auth from '../../components/Authentication/Authentication'

const userService = new UserService();

export class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emailOrPhone: "",
            password: "",
            emailOrPhoneError: false,
            passwordError: false
        };
    }

    isValidated = () => {
        let isError = false;
        const errors = this.state;

        errors.emailOrPhoneError = this.state.emailOrPhone !== "" ? false : true;
        errors.passwordError = this.state.password !== "" ? false : true;

        this.setState({
            ...errors
        });

        return (isError = errors.emailOrPhoneError || errors.passwordError);
    };

    validate = () => {
        var isValid = this.isValidated();
        console.log(this.state);
        if (!isValid) {
            console.log("Validation Successfull!!");
            let data = {
                "email": this.state.emailOrPhone,
                "password": this.state.password
            };
            userService.login("/user/login", data)
                .then((res) => {
                    console.log("User Logged in!");
                    localStorage.setItem("id", res.data.id);
                    localStorage.setItem("firstName", res.data.firstName);
                    localStorage.setItem("lastName", res.data.lastName);
                    localStorage.setItem("email", res.data.email);
                                       
                    Auth.login(() => {
                        this.props.history.push("/dashboard");
                    })
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
                    <h1 className="signin-title">Sign in</h1>
                    <h3 className="signin-sub">Use your Fundoo Account</h3>
                    <div className="form sign-in-form">

                        <div className="name-input">
                            <TextField
                                fullWidth
                                margin="normal"
                                size="medium"
                                id="Email or phone"
                                label="Email or phone"
                                variant="outlined"
                                name="emailOrPhone"
                                error={this.state.emailOrPhoneError}
                                helperText={this.state.emailOrPhoneError ? "Enter email or phone number" : ""}
                                onChange={(e) => this.changeHandler(e)}
                            />
                            <TextField
                                fullWidth
                                type="password"
                                margin="normal"
                                size="medium"
                                id="password"
                                label="Password"
                                variant="outlined"
                                name="password"
                                error={this.state.emailOrPhoneError}
                                helperText={this.state.emailOrPhoneError ? "Enter your password" : ""}
                                onChange={(e) => this.changeHandler(e)}
                            />
                            <Router>
                                <Button
                                    style={{
                                        textTransform: 'none',
                                        fontWeight: 'bolder',
                                        fontSize: '1.5vh',
                                        backgroundColor: "#fff",
                                        paddingLeft: '0%'
                                    }}
                                    size="small"
                                    onClick={() => { this.props.history.push("/forgotemail") }}
                                >Forgot email?</Button>
                            </Router>
                        </div>

                        <div className="learn-section">
                            <p className="helper">Not your computer? Use Guest mode to sign in privately.</p>
                            <Button
                                style={{
                                    textTransform: 'none',
                                    fontWeight: 'bolder',
                                    fontSize: '1.5vh',
                                    backgroundColor: "#fff",
                                    paddingLeft: '0%'
                                }}
                                size="small"
                            >Learn more</Button>
                        </div>

                        <div className="create-account">
                            <Router>
                                <Button
                                    style={{
                                        textTransform: 'none',
                                        fontWeight: 'bolder',
                                        fontSize: '1.5vh'
                                    }}
                                    size="small"
                                    onClick={() => { this.props.history.push("/") }}
                                >Create account</Button>
                            </Router>
                            <Button
                                style={{
                                    paddingLeft: '1px',
                                    paddingRight: '1px'
                                }}
                                variant="contained"
                                size="medium"
                                onClick={this.validate}
                            >Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
