// API calls for accounts go in here, to keep them all in one place
import {postData} from "api/helpers"
import {constants} from "../constants"

export function createUserAccount (data) {
    const url = constants["baseSiteURL"] + "/accounts/users/"
    return postData(url, data)
}