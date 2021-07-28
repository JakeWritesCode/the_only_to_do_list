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


describe("The HomeSplash component", () => {
    test("should the log in and sign up buttons visible on load", () => {
        const active_area_callback = jest.fn()
        render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
        expect(screen.getByText("Login", {selector: "button"})).toBeVisible()
        expect(screen.getByText("Sign Up", {selector: "button"})).toBeVisible()
    })

    describe("when clicking the log in button", () => {
        test("should add the slidey-showey class name to the splash-login-area", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Login", {selector: "button"}))

            expect(screen.getByTestId("splash-login-area").className).toContain("slidey-showey")
        })

        test("should call the callback function with the correct active_area", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Login", {selector: "button"}))

            expect(active_area_callback.mock.calls.length).toBe(1)
            expect(active_area_callback.mock.calls[0][0]).toBe("Log In / Out")
        })
    })

    describe("when clicking the sign up button", () => {
        test("should add the slidey-showey class name to the splash-signup-area", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Sign Up", {selector: "button"}))

            expect(screen.getByTestId("splash-signup-area").className).toContain("slidey-showey")
        })

        test("should call the callback function with the correct active_area", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Sign Up", {selector: "button"}))

            expect(active_area_callback.mock.calls.length).toBe(1)
            expect(active_area_callback.mock.calls[0][0]).toBe("Sign Up")
        })
    })

    describe("when clicking the back button on the log in page", () => {
        test("the slidey-showey class should be removed from all elements", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Login", {selector: "button"}))
            expect(screen.getByTestId("splash-login-area").className).toContain("slidey-showey")
            userEvent.click(screen.getByTestId("login-go-back"))

            expect(screen.getByTestId("splash-login-area").className).not.toContain("slidey-showey")
        })

        test("should call the callback function with the correct active_area", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Login", {selector: "button"}))
            expect(screen.getByTestId("splash-login-area").className).toContain("slidey-showey")

            active_area_callback.mockReset()
            userEvent.click(screen.getByTestId("login-go-back"))

            expect(active_area_callback.mock.calls.length).toBe(1)
            expect(active_area_callback.mock.calls[0][0]).toBe("Home")
        })
    })

    describe("when clicking the back button on the sign up page", () => {
        test("the slidey-showey class should be removed from all elements", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Sign Up", {selector: "button"}))
            expect(screen.getByTestId("splash-signup-area").className).toContain("slidey-showey")
            userEvent.click(screen.getByTestId("signup-go-back"))

            expect(screen.getByTestId("splash-signup-area").className).not.toContain("slidey-showey")
        })

        test("should call the callback function with the correct active_area", () => {
            const active_area_callback = jest.fn()
            render(<HomeSplash active_area={"Home"} set_active_area_callback={active_area_callback}/>)
            userEvent.click(screen.getByText("Sign Up", {selector: "button"}))
            expect(screen.getByTestId("splash-signup-area").className).toContain("slidey-showey")

            active_area_callback.mockReset()
            userEvent.click(screen.getByTestId("signup-go-back"))

            expect(active_area_callback.mock.calls.length).toBe(1)
            expect(active_area_callback.mock.calls[0][0]).toBe("Home")
        })
    })
})