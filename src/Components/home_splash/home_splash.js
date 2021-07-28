// The home splash funky bit

import React from 'react';
import PropTypes from 'prop-types';
import "./home_splash.scss"
import {Button} from "react-bootstrap";
import {ListAlt, ArrowBack} from "@material-ui/icons";


function handleNavigate(active_area, set_active_area_callback) {
    // This sets the slide in for the new area before calling
    // the props specified callback function
    if (active_area === "Log In / Out") {
        document.getElementById("splash-login-area").className += " slidey-showey"
    }
    if (active_area === "Sign Up") {
        document.getElementById("splash-signup-area").className += " slidey-showey"
    }
    set_active_area_callback(active_area)
}

function handleGoBack(event, set_active_area_callback) {
    // Back for this screen is always back to the splash
    // so just get rid of all the slidey-showeys
    // There should only be one, but loop em anyway
    set_active_area_callback("Home")
    const elements = document.getElementsByClassName("slidey-showey")
    for (let i = 0; i < elements.length; i++) {
        elements[i].className = elements[i].className.replace(" slidey-showey", "")
    }
}

export default function HomeSplash(props) {
    return (
        <div className="splash-container">
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
                                            onClick={() => handleNavigate("Log In / Out", props.set_active_area_callback)}>
                                            Login
                                        </Button>
                                    </div>
                                    <div className="col-6">
                                        <Button
                                            className="btn btn-dark w-100"
                                            onClick={() => handleNavigate("Sign Up", props.set_active_area_callback)}>
                                            Sign Up</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Second block (login)  */}
                <div className="h-100 slidey-hidey bg-todo-primary" id="splash-login-area">
                    <div className="row h-100">
                        <div className="col-12">
                            <ArrowBack
                                style={{fontSize: 70, color: "white", float: "left"}}
                                onClick={(event) => handleGoBack(event, props.set_active_area_callback)}
                                id="login-go-back"
                            />
                        </div>
                        <div className="row text-center">
                            <h1>Log In</h1>
                        </div>
                    </div>
                </div>
                {/*  Third block (signup)  */}
                <div className="h-100 slidey-hidey bg-todo-primary" id="splash-signup-area">
                    <div className="row h-100">
                        <div className="col-12">
                            <ArrowBack
                                style={{fontSize: 70, color: "white", float: "left"}}
                                onClick={(event) => handleGoBack(event, props.set_active_area_callback)}
                                id="signup-go-back"
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

HomeSplash.propTypes = {
    active_area: PropTypes.string.isRequired,
    set_active_area_callback: PropTypes.func.isRequired,
}