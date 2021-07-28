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


describe("The App component", () => {
    test("should call ", () => {
        console.log("I havent written this yet..")
    })
})