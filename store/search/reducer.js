import { createReducer } from "@reduxjs/toolkit";
import textActions from './actions'
const {captureText} = textActions

const initiateState= {
    text: ''
}

const reducer = createReducer(
    initiateState,
    (builder) => builder
    .addCase(
        captureText,
        (state,action) => {
            let newState = {
                ...state,
                text : action.payload.text    
            }
            return newState
        }
    )
)

export default reducer