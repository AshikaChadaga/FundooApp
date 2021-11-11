import React from 'react'

class Authentication {
    constructor(props) {
        this.authenticated = false;
    }
    login(cb) {
        this.authenticated = true;
        cb();
    }
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authentication();

