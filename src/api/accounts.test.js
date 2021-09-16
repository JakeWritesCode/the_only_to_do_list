//Tests for the Accounts API calls.

import {constants} from "../constants"
import {createUserAccount} from "./accounts";
import * as helpers from 'api/helpers';


describe("The createUserAccount function", () => {
    test("should call postData with the correct URL and data", () => {
        const postDataSpy = jest.spyOn(helpers, 'postData');
        createUserAccount({"test": 123})
        expect(postDataSpy).toHaveBeenCalledTimes(1)
        expect(postDataSpy).toHaveBeenCalledWith(
            constants["baseSiteURL"] + "/accounts/users/",
            {"test": 123}
        )
    })

    test("should return the whole response object from postData", () => {
        jest.spyOn(helpers, 'postData').mockReturnValue(1234);
        createUserAccount({"test": 123})
        const response = createUserAccount({"test": 123})
        expect(response).toBe(1234)
    })
})

