// The home splash funky bit

import React from 'react';
import PropTypes from 'prop-types';
import "./login.scss"
import {ArrowBack} from "@material-ui/icons";
import {useHistory} from "react-router-dom";


export default function LoginScreen(props) {
    const history = useHistory()

    return (
        <div className="splash-container">
            <div className="home-splash-div">
                <div
                    className="h-100 bg-todo-primary"
                    id="splash-login-area">
                    <div className="row h-100">
                        <div className="col-12">
                            <ArrowBack
                                style={{fontSize: 70, color: "white", float: "left"}}
                                onClick={() => history.push("/")}
                                id="login-go-back"
                            />
                        </div>
                        <div className="row text-center">
                            <h1>Log In</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}