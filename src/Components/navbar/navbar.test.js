//Tests for the TodoNavbar component.

import TodoNavbar from "./navbar";
import {configure, render, screen} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event'

configure({testIdAttribute: 'id'})

// Mock the useLocation hook
const mockPush = jest.fn()
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "/hello",
    }),
    useHistory: () => ({
        push: mockPush
    })
}));

describe("The navbar component", () => {
    test("renders one button for each item in buttons array", () => {
        const buttons = [
            {
                "text": "Button 1",
                "route": "/"
            },
            {
                "text": "Button 2",
                "route": "/hello"
            },
            {
                "text": "Button 3",
                "route": "/goodbye"
            },
        ]

        const component = render(<TodoNavbar buttons={buttons} homeText="Hello"/>)
        const found_buttons = component.container.querySelectorAll("[id*='nav-link']")

        expect(found_buttons.length).toBe(3)

        const expected_texts = ["Button 1", "Button 2", "Button 3"]
        for (let i = 0; i < found_buttons.length; i++) {
            expect(expected_texts).toContain(found_buttons[i].textContent)
        }
    })

    test("pushes the given route to the history hook when a nav button is pressed", () => {
        const buttons = [
            {
                "text": "Button 1",
                "route": "/test",
            },
        ]

        render(<TodoNavbar buttons={buttons}/>)
        userEvent.click(screen.getByText("Button 1"))
        expect(mockPush).toHaveBeenCalledTimes(1)
        expect(mockPush).toHaveBeenCalledWith("/test")
    })

    test("gives each button an id according to its index", () => {
        const buttons = [
            {
                "text": "Button 1",
                "route": "/"
            },
            {
                "text": "Button 1",
                "route": "/hello"
            },
        ]

        const result = render(<TodoNavbar buttons={buttons}/>)
        for (let i = 0; i < 2; i++) {
            expect(result.container.querySelector("#nav-link-" + i)).toBeTruthy()
        }
    })

    test("displays the homeText prop as a navbar-brand link and links to the homepage", () => {
        const component = render(<TodoNavbar buttons={[]} homeText="Hello"/>)
        const homelink = component.container.querySelector("[class*='navbar-brand']")

        expect(homelink.textContent).toBe("Hello")
        userEvent.click(homelink)
        expect(mockPush).toHaveBeenCalledWith("/")
    })
})