import React from 'react';
import "../screens_common.scss"
import {ArrowBack} from "@material-ui/icons";
import {useHistory} from "react-router-dom";
import {Card, Button, Form, Row, Col} from "react-bootstrap"
import {Formik, Field} from 'formik';
import {createUserAccount} from "api/accounts"
import {applyAPIErrorsToFormik} from "api/helpers";

const SignUpForm = () => {
    const history = useHistory()

    return (
        <Formik

            initialValues={{
                email: "",
                first_name: "",
                last_name: "",
                password: "",
                passwordConfirm: ""
            }}

            validateOnChange={true}

            validate={(values) => {
                let errors = {};
                if (!values.first_name) {
                    errors.first_name = 'First name is required';
                }

                if (!values.last_name) {
                    errors.last_name = 'Last name is required';
                }

                if (!values.email) {
                    errors.email = 'Email address is required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = "you must enter a password!"
                }
                if (values.password !== values.passwordConfirm) {
                    errors.password = "Passwords must match."
                    errors.passwordConfirm = "Passwords must match."
                    // We'll validate the rest in the backend
                }
                return errors
            }}

            onSubmit={async (values, actions) => {
                const response = await createUserAccount(values)
                const status = response.status
                const data = await response.json()
                switch (status) {
                    case 201:
                        actions.resetForm()
                        // TODO - Something, possible move to home screen when it exists.
                        break
                    case 400:
                        applyAPIErrorsToFormik(actions, data)
                        break
                    default:
                        actions.setStatus("There was a problem, please try again!")
                }
            }}
        >

            {({
                  errors,
                  touched,
                  handleSubmit,
                  status
              }) => (
                <Form>
                    <Field name="email">
                        {({field, formProps}) => (
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                              placeholder="Enter email"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                                {touched.email && errors.email &&
                                <div className="form-error">{errors.email}</div>}
                                <Form.Text className="text-muted">
                                    Well never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        )}
                    </Field>
                    <Row>
                        <Col width={6}>
                            <Field name="first_name">
                                {({field, formProps}) => (
                                    <Form.Group className="mb-3"
                                                controlId="first_name">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="First Name"
                                                      value={field.value}
                                                      onChange={field.onChange}
                                        />
                                        {touched.first_name && errors.first_name &&
                                        <div className="form-error">{errors.first_name}</div>}
                                    </Form.Group>
                                )}
                            </Field>
                        </Col>
                        <Col width={6}>
                            <Field name="last_name">
                                {({field, formProps}) => (
                                    <Form.Group className="mb-3"
                                                controlId="last_name">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text"
                                                      placeholder="Last Name"
                                                      value={field.value}
                                                      onChange={field.onChange}
                                        />
                                        {touched.last_name && errors.last_name &&
                                        <div className="form-error">{errors.last_name}</div>}
                                    </Form.Group>
                                )}
                            </Field>
                        </Col>
                    </Row>
                    <Field name="password">
                        {({field, formProps}) => (
                            <Form.Group className="mb-3"
                                        controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Password"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                                {touched.password && errors.password &&
                                <div className="form-error">{errors.password}</div>}
                            </Form.Group>
                        )}
                    </Field>
                    <Field name="passwordConfirm">
                        {({field, formProps}) => (
                            <Form.Group className="mb-3"
                                        controlId="passwordConfirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password"
                                              placeholder="Confirm Password"
                                              value={field.value}
                                              onChange={field.onChange}
                                />
                                {touched.passwordConfirm && errors.passwordConfirm &&
                                <div className="form-error">{errors.passwordConfirm}</div>}
                            </Form.Group>
                        )}
                    </Field>
                    <Row>
                        <Col>
                            {status && <p className="form-error"
                                          id="signup-nonfield-errors">{status.message}</p>}
                        </Col>
                    </Row>
                    <Button className="btn btn-lg btn-todo-primary"
                            onClick={handleSubmit}
                            id="sign-up-confirm"
                    >Sign Up</Button>
                    <Button className="btn btn-lg btn-light float-end"
                            onClick={() => history.push("/login")}>Go to Log In</Button>
                </Form>
             )}
        </Formik>
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
                                    <SignUpForm/>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}