//Tests for the SplashScreen component.

import {render, screen} from "@testing-library/react";
import React from "react";
import userEvent from '@testing-library/user-event'
import {configure} from '@testing-library/react'
import App from "./App"
import TodoNavbar from "./Components/navbar/navbar"

// screen.getByTestID now queries for ID, because no ID support out of the box.
// heres why:
//https://github.com/testing-library/react-testing-library/issues/683
// 'We're not doing it because we don't want to!'.
configure({testIdAttribute: 'id'})


describe("The App component", () => {
    test("should call to TodoNavbar with the correct buttons", () => {
        const mock_nav = jest.spyOn(navbar, Todo)
        jest.mock("./Components/navbar/navbar.js")
        render(<App/>)
        expect(TodoNavbar).toHaveBeenCalledWith()x, y ,z
    })
})