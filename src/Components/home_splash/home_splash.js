// The home splash funky bit

import React from 'react';
import PropTypes from 'prop-types';
import "./home_splash.scss"
import {Button} from "react-bootstrap";
import {ListAlt} from "@material-ui/icons";


export default function HomeSplash(props) {
    return (
        <div className="splash-container">
            <div className="home-splash-div">
                <div className="row h-100">
                    <div className="col-4 vertical-center-parent text-center align-content-center">
                        <div className="vertical-center-child w-100">
                            <ListAlt style={{fontSize: 200, color: "white", float: "right"}}/>
                        </div>
                    </div>
                    <div className="col-8 vertical-center-parent text-left align-content-center">
                        <div className="vertical-center-child">
                            <div className="row">
                                <h1 className="splash-title">An average To-Do List App</h1>
                            </div>
                            <div className="row">
                                <h2 className="splash-subtitle">Because I&apos;m all out of original
                                    app ideas...</h2>
                            </div>
                            <div className="row">
                                <Button className="btn btn-dark">Log in</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

HomeSplash.propTypes = {
    homeClick: PropTypes.string,
    homeText: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
    navLinkClick: PropTypes.func
}