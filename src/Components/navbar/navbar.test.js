//Tests for the TodoNavbar component.

import TodoNavbar from "./navbar";
import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event'

describe("The navbar component", () => {
    test("renders one button for each item in buttons array", () => {
        const buttons = [
            {
                "text": "Button 1",
                "onClick": () => {
                },
                "active": false
            },
            {
                "text": "Button 2",
                "onClick": () => {
                },
                "active": false
            },
            {
                "text": "Button 3",
                "onClick": () => {
                },
                "active": false
            },

        ]

        render(<TodoNavbar buttons={buttons} homeText="Hello"/>)
        const found_buttons = screen.getAllByRole("button")
        expect(found_buttons.length).toBe(4)

        // The blank is for the burger button
        const expected_texts = ["", "Button 1", "Button 2", "Button 3"]
        for (let i = 0; i < found_buttons.length; i++) {
            expect(expected_texts).toContain(found_buttons[i].textContent)
        }
    })

    test("renders active: true component with text-bold class", () => {
        const buttons = [
            {
                "text": "Button 1",
                "onClick": () => {
                },
                "active": false
            },
            {
                "text": "Button 2",
                "onClick": () => {
                },
                "active": true
            },
            {
                "text": "Button 3",
                "onClick": () => {
                },
                "active": false
            },

        ]

        render(<TodoNavbar buttons={buttons}/>)
        expect(screen.getByText("Button 1").className).not.toContain("text-bold")
        expect(screen.getByText("Button 2").className).toContain("text-bold")
        expect(screen.getByText("Button 3").className).not.toContain("text-bold")
    })

    test("calls the specified callback function when a button is pressed", () => {
        const click_mock = jest.fn()
        const buttons = [
            {
                "text": "Button 1",
                "onClick": click_mock,
                "active": false
            },
        ]

        render(<TodoNavbar buttons={buttons}/>)
        userEvent.click(screen.getByText("Button 1"))
        expect(click_mock.mock.calls.length).toBe(1)
    })

    test("gives each button an id according to its index", () => {
        const buttons = [
            {
                "text": "Button 1",
                "onClick": () => {
                },
                "active": false
            },
            {
                "text": "Button 1",
                "onClick": () => {
                },
                "active": false
            },
        ]

        const result = render(<TodoNavbar buttons={buttons}/>)
        for (let i = 0; i < 2; i++) {
            expect(result.container.querySelector("#nav-link-" + i)).toBeTruthy()
        }
    })
})