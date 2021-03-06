import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container, Nav} from "react-bootstrap";
import "base.scss"
import {
    useHistory,
    useLocation,
} from "react-router-dom";


export default function TodoNavbar(props) {
    const location = useLocation()
    const history = useHistory()

    return (
        <div className="bg-todo-primary">
        <Navbar className="navbar-bg bottom-shadow" expand="lg">
            <Container className="w-100">
                <Navbar.Brand onClick={() => history.push("/")}>{props.homeText}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.buttons.map((button, index) => (
                            <Nav.Link key={index}
                                      onClick={() => history.push(button.route)}
                                      id={"nav-link-" + index}
                                      noodler={location.pathname + button.route}
                                      className={"nav-item" + button.route === location.pathname ? " text-bold" : ""}
                            >
                                {button.text}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>
    )
}

TodoNavbar.propTypes = {
    homeClick: PropTypes.string,
    homeText: PropTypes.string,
    buttons: PropTypes.array.isRequired,
    navLinkClick: PropTypes.func
}
