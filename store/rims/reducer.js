import { createReducer } from "@reduxjs/toolkit";
import getAllRimssActions from './actions.js'

const { getAllRims } = getAllRimssActions
const initialState = {
    rim: [],
};


const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            getAllRims.fulfilled,
            (state, action) => {
                //console.log(action.payload)
                let newState = {
                    ...state,
                    rim: action.payload.rim
                }
                return newState
            }
        )
)

export default reducer