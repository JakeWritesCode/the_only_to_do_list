// The home splash funky bit

import React from 'react';
import PropTypes from 'prop-types';
import "../screens_common.scss"
import {ArrowBack} from "@material-ui/icons";
import {useHistory} from "react-router-dom";


export default function SignupScreen(props) {
    const history = useHistory()

    return (
        <div className="page-container page">
            <div className="home-splash-div">
                <div
                    className="h-100 bg-todo-primary"
                    id="splash-signup-area">
                    <div className="row h-100">
                        <div className="col-12">
                            <ArrowBack
                                style={{fontSize: 70, color: "white", float: "left"}}
                                onClick={() => history.push("/")}
                                id="login-go-back"
                            />
                        </div>
                        <div className="row text-center">
                            <h1>Sign Up</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}