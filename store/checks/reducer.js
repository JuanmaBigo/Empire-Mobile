import { createReducer } from "@reduxjs/toolkit";
import checkActions from './actions'
const {captureChecks, captureState} = checkActions

const initiateState= {
    checks: [],
    checked: false
}

const reducer = createReducer(
    initiateState,
    (builder) => builder
    .addCase(
        captureChecks,
        (state,action) => {
            let newState = {
                ...state,
                checks : action.payload.checks  
            }
            return newState
        }
    )
    .addCase(
        captureState,
        (state,action) => {
            let newState = {
                ...state,
                checked : action.payload.checked 
            }
            return newState
        }
    )
)



export default reducer