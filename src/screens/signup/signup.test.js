//Tests for the signup screen

import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event'
import {configure} from "@testing-library/react"
import SignupScreen from "./signup";

// screen.getByTestID now queries for ID, because no ID support out of the box.
// heres why:
//https://github.com/testing-library/react-testing-library/issues/683
// 'We're not doing it because we don't want to!'.
configure({testIdAttribute: 'id'})

// Mock react-router hooks
const mockPush = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useHistory: () => ({
        push: mockPush
    })
}));


describe("The signupscreen", () => {
    test("should render a form with the correct fields and initial values", () => {
        render(<SignupScreen/>)
        expect(screen.getByLabelText("Email address")).toHaveValue("")
        expect(screen.getByLabelText("First Name")).toHaveValue("")
        expect(screen.getByLabelText("Last Name")).toHaveValue("")
        expect(screen.getByLabelText("Password")).toHaveValue("")
        expect(screen.getByLabelText("Confirm Password")).toHaveValue("")
    })

    describe("when initially validating the entered signupform data", () => {
        test("should check for missing data from each field", () => {
            render(<SignupScreen/>)
            userEvent.click(screen.getByTestId("sign-up-confirm"))
            expect(screen.getByText("Email address is required")).toBeInTheDocument()
        })
    })
})