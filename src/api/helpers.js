
export function postData(url = '', data = {}) {
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data)
  });
}

export function applyAPIErrorsToFormik(formikActions, errorsDict) {
  // Turns a DRF 400 JSON response dict into formik errors.
  // Assumes the backend fields match the form filed names.
  for (const [key, value] of Object.entries(errorsDict)) {
    if (key !== "non_field_errors") {
      formikActions.setFieldError(key, value.toString())
    } else {
      formikActions.setStatus(value)
    }
  }
}