import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container, Nav} from "react-bootstrap";
import "base.scss"

export default function TodoNavbar(props) {
    return (
        <Navbar className="bg-todo-primary bottom-shadow" expand="lg">
            <Container className="w-100">
                <Navbar.Brand onClick={() => props.homeClick()}>{props.homeText}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {props.buttons.map((button, index) => (
                            <Nav.Link
                                id={"nav-link-" + index}
                                key={index}
                                onClick={button.onClick}
                                className={button.active ? "text-bold" : ""}>
                                {button.text}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

TodoNavbar.propTypes = {
    homeClick: PropTypes.string,
    homeText: PropTypes.string.isRequired,
    buttons: PropTypes.array.isRequired,
    navLinkClick: PropTypes.func
}