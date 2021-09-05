// The home splash funky bit

import React from 'react';
import PropTypes from 'prop-types';
import "../screens_common.scss"
import {ArrowBack} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {Card, Button, Form} from "react-bootstrap"
import {Formik, Field} from 'formik';

const SignUpForm = () => {
    const history = useHistory()

    return (
        <Formik
            initialValues={{
                email: "",
                firstName: '',
                lastName: '',
                password: "",
                passwordConfirm: ""
            }}

            validate={(values) => {
                let errors = {};
                if (!values.firstName) {
                    errors.firstName = 'First name is required';
                }

                if (!values.lastName) {
                    errors.lastName = 'Last name is required';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors
            }}

            onSubmit={() => {
                console.log('form submitted!!')
            }}

            render={({
                         handleChange,
                         handleSubmit,
                         handleBlur,
                         values,
                         errors
                     }) => (
                <Form>
                    <Field
                        name="email"
                        render={({field, formProps}) => (
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              placeholder="Enter email"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                                <Form.Text className="text-muted">
                                    Well never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        )}
                    />

                    <Field
                        name="firstName"
                        render={({field, formProps}) => (
                            <Form.Group className="mb-3"
                                        controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="First Name"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                            </Form.Group>
                        )}
                    />

                    <Field
                        name="lastName"
                        render={({field, formProps}) => (
                            <Form.Group className="mb-3"
                                        controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text"
                                              placeholder="Last Name"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                            </Form.Group>
                        )}
                    />

                    <Field
                        name="password"
                        render={({field, formProps}) => (
                            <Form.Group className="mb-3"
                                        controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Password"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                            </Form.Group>
                        )}
                    />

                    <Field
                        name="passwordConfirm"
                        render={({field, formProps}) => (
                            <Form.Group className="mb-3"
                                        controlId="passwordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Confirm Password"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                            </Form.Group>
                        )}
                    />

                    <Button className="btn btn-lg btn-todo-primary" onClick={handleSubmit}>Sign
                        Up</Button>
                    <Button className="btn btn-lg btn-light float-end"
                            onClick={() => history.push("/login")}>Go to Log In</Button>
                </Form>
            )
            }
        />
    )
}

export default function SignupScreen(props) {
    const history = useHistory()

    return (
        <div className="page-container page">
            <div className="home-splash-div">
            </div>
            <div
                className=""
                id="splash-signup-area ">
                <div className="row h-100 screen-front">
                    <div className="col-12">
                        <ArrowBack
                            style={{fontSize: 70, color: "white", float: "left"}}
                            onClick={() => history.push("/")}
                            id="login-go-back"
                        />
                    </div>
                    <div className="row">
                        <div className="col">
                            <Card className="w-75" style={{margin: "auto"}}>
                                <Card.Body>
                                    <Card.Title className="mb-2">Sign Up Today!</Card.Title>
                                    {SignUpForm()}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}