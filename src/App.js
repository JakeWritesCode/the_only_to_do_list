import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoNavbar from "./Components/navbar/navbar";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "logged_in": false
        }
        this.navbarButtons = [
            {
                "text": "Home",
                "onClick": () => console.log("Home Clicked")
            },
            {
                "text": this.state.logged_in ? "Log Out" : "Log In",
                "onClick": () => console.log("Log in / Out Clicked")
            },
            {
                "text": "To-Do List",
                "onClick": () => console.log("To-Do Clicked")
            },
            {
                "text": "Reminders",
                "onClick": () => console.log("Reminders Clicked")
            }
        ]
    }

    render() {
        return (
            <div>
                <TodoNavbar homeText="Jakes To-Do List" buttons={this.navbarButtons}/>
                <h1>Hello</h1>
            </div>
        )
    }
}