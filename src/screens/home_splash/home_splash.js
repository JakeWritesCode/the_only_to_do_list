// The home splash funky bit

import React from 'react';
import PropTypes from 'prop-types';
import "../screens_common.scss"
import {Button} from "react-bootstrap";
import {ListAlt, ArrowBack} from "@material-ui/icons";
import {useHistory} from "react-router-dom";


export default function HomeSplash(props) {
    const history = useHistory()

    return (
        <div className="page-container page">
            <div className="home-splash-div">
                <div className="h-100" id="splash-title-area">
                    {/* First block with title and buttons */}
                    <div className="row h-100">
                        <div className="col-lg-4 vertical-center-parent text-center align-content-center">
                            <div className="vertical-center-child w-100">
                                <ListAlt style={{fontSize: 200, color: "white", float: "right"}}/>
                            </div>
                        </div>
                        <div className="col-lg-8 vertical-center-parent text-left align-content-center">
                            <div className="vertical-center-child">
                                <div className="row">
                                    <h1 className="splash-title">An Okay To-Do List App</h1>
                                </div>
                                <div className="row">
                                    <h2 className="splash-subtitle">Because I&apos;m all out of original
                                        app ideas...</h2>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Button
                                            className="btn btn-light w-100"
                                            onClick={() => history.push("/login")}>
                                            Login
                                        </Button>
                                    </div>
                                    <div className="col-6">
                                        <Button
                                            className="btn btn-dark w-100"
                                            onClick={() => history.push("sign-up")}>
                                            Sign Up</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}