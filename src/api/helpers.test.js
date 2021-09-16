// Tests for API helpers.

import {postData} from "./helpers";
import * as helpers from "./helpers";

describe("The postData function", () => {
    test("should call the native fetch API with the correct settings", () => {
        const fetchSpy = jest.spyOn(global, 'fetch');
        postData("https://my-url.com", {"test": 123})
        expect(fetchSpy).toHaveBeenCalledTimes(1)
        expect(fetchSpy).toHaveBeenCalledWith(
            "https://my-url.com",
            {
                method: "POST",
                mode: "cors",
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({"test": 123})
            }
        )
    })

    test("should return the results of the fetch call", async () => {
        const fetchSpy = jest.spyOn(global, 'fetch').mockReturnValue("response");
        const ret = await postData("https://my-url.com", {"test": 123})
        expect(ret).toBe("response")
    })
})