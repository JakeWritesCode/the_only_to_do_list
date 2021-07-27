import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoNavbar from "./Components/navbar/navbar";
import HomeSplash from "./Components/home_splash/home_splash";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "logged_in": false,
            "active_area": "Home"
        }
    }

    navBarButtons() {
        return (
            [
                {
                    "text": "Home",
                    "onClick": () => this.setState({"active_area": "Home"}),
                    "active": this.state.active_area === "Home"
                },
                {
                    "text": this.state.logged_in ? "Log Out" : "Log In",
                    "onClick": () => this.setState({"active_area": "Log In / Out"}),
                    "active": this.state.active_area === "Log In / Out"
                },
                {
                    "text": "To-Do List",
                    "onClick": () => this.setState({"active_area": "To-Do List"}),
                    "active": this.state.active_area === "To-Do List"
                },
                {
                    "text": "Reminders",
                    "onClick": () => this.setState({"active_area": "Reminders"}),
                    "active": this.state.active_area === "Reminders"
                }
            ]
        )
    }

    render() {
        return (
            <div>
                <TodoNavbar homeText="Jakes To-Do List" buttons={this.navBarButtons()}/>
                <HomeSplash/>
            </div>
        )
    }
}