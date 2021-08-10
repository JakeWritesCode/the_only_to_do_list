import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoNavbar from "./Components/navbar/navbar";
// import HomeSplash from "./Components/home_splash/home_splash";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomeSplash from "./Components/home_splash/home_splash";

export default class App extends React.Component {
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
        return (
            <Router>
                <div>
                    <TodoNavbar homeText={"Hello"} buttons={this.navBarButtons()}/>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/todo">
                            <h1>Todo</h1>
                        </Route>
                        <Route path="/reminders">
                            <h1>Reminders</h1>
                        </Route>
                        <Route path="/login">
                            <h1>Login</h1>
                        </Route>
                        <Route path="/sign-up">
                            <h1>Signup</h1>
                        </Route>
                        <Route path="/">
                            <HomeSplash/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}