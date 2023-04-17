import { createReducer } from "@reduxjs/toolkit";
import getAllColorsActions from './actions.js'

const { getAllColors } = getAllColorsActions
const initialState = {
    colors: [],
};


const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            getAllColors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    colors: action.payload.colors
                }
                //console.log(action.payload)
                return newState
            }
        )
)

export default reducer