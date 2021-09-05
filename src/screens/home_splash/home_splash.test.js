//Tests for the SplashScreen component.

import HomeSplash from "./home_splash";
import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event'
import {configure} from '@testing-library/react'

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


describe("The HomeSplash component", () => {
    test("should the log in and sign up buttons visible on load", () => {
        const active_area_callback = jest.fn()
        render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
        expect(screen.getByText("Login", {selector: "button"})).toBeVisible()
        expect(screen.getByText("Sign Up", {selector: "button"})).toBeVisible()
    })

    test("should push to history when the loginbutton is pressed", () => {
        render(<HomeSplash/>)
        userEvent.click(screen.getByText("Login", {selector: "button"}))

        expect(mockPush).toHaveBeenCalledTimes(1)
        expect(mockPush).toHaveBeenCalledWith("/login")
    })

    test("should push to history when the sign up button is pressed", () => {
        const active_area_callback = jest.fn()
        render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
        userEvent.click(screen.getByText("Sign Up", {selector: "button"}))

        expect(mockPush).toHaveBeenCalledTimes(1)
        expect(mockPush).toHaveBeenCalledWith("sign-up")
    })
})