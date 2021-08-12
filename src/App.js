import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoNavbar from "./Components/navbar/navbar";
import HomeSplash from "./screens/home_splash/home_splash";
import {PropTypes} from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
    withRouter
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import LoginScreen from "./screens/login/login";
import SignupScreen from "./screens/signup/signup";

export default class App extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            "logged_in": false,
        }
    }

    navBarButtons() {
        return (
            [
                {
                    "text": "Home",
                    "route": "/"
                },
                {
                    "text": this.state.logged_in ? "Log Out" : "Log In",
                    "route": "/login"
                },
                {
                    "text": "To-Do List",
                    "route": "/todo"
                },
                {
                    "text": "Reminders",
                    "route": "/reminders"
                }
            ]
        )
    }

    render() {
        const {location} = this.props;

        return (
            <Router>
                <div>
                    <TodoNavbar homeText={"Hello"} buttons={this.navBarButtons()}/>
                    <TransitionGroup>
                        <CSSTransition
                            key={currentKey}
                            timeout={timeout}
                            classNames="pageSlider"
                            mountOnEnter={false}
                            unmountOnExit={true}
                        >
                            <Switch location={location}>
                                <Route path="/todo">
                                    <h1>Todo</h1>
                                </Route>
                                <Route path="/reminders">
                                    <h1>Reminders</h1>
                                </Route>
                                <Route path="/login">
                                    <LoginScreen/>
                                </Route>
                                <Route path="/sign-up">
                                    <SignupScreen/>
                                </Route>
                                <Route path="/">
                                    <HomeSplash/>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </Router>
        )
    }
}