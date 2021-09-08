import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TodoNavbar from "./Components/navbar/navbar";
import HomeSplash from "./screens/home_splash/home_splash";
import {PropTypes} from "prop-types";
import {ReactQueryDevtools} from 'react-query/devtools'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";
import LoginScreen from "./screens/login/login";
import SignupScreen from "./screens/signup/signup";

class App extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            logged_in: false,
            prevDepth: this.getPathDepth(this.props.location)
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

    getPathDepth(location) {
        let pathArr = location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");
        return pathArr.length;
    }

    render() {
        const {location} = this.props;
        const queryClient = new QueryClient()
        const currentKey = location.pathname.split("/")[1] || "/";
        //Specify the duration of the animation (on enter and on exit)
        const timeout = {enter: 500, exit: 500};

        return (
            <QueryClientProvider client={queryClient}>
                <div>
                    <TodoNavbar homeText={"Appy Face"} buttons={this.navBarButtons()}/>
                    <TransitionGroup component="div" className="TransitionBox">
                        <CSSTransition
                            key={currentKey}
                            timeout={timeout}
                            classNames="page-slider"
                            mountOnEnter={false}
                            unmountOnExit={true}
                        >
                            <div className={
                                this.getPathDepth(location) - this.state.prevDepth >= 0
                                    ? "left"
                                    : "right"
                            }>
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
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        )
    }
}

export default withRouter(App)