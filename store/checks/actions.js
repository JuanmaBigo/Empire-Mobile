import { createAction } from "@reduxjs/toolkit";

let captureChecks = createAction(
    'captureChecks',
    ({ inputCheck }) => {

        return {
            payload: { checks: inputCheck }
        }

    }
)

let captureState = createAction(
    'captureState',
    ({ buttonState }) => {
        return {
            payload: { checked: buttonState }
        }
    }
)





const actions = { captureChecks, captureState }

export default actions