import { createReducer } from "@reduxjs/toolkit";
import colorsActions from './actions'

const { get_colors } = colorsActions

const initialState = {
    colors: [],
}

const colorsReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            get_colors.fulfilled,
            (state, action) => {
                let newState = {
                    ...state,
                    colors: action.payload.colors,
                }
                return newState
            }
        )
        .addCase(get_colors.rejected, (state, action) => {
            let newState =  {
                message: "error"
            }
            return newState
        })
)

export default colorsReducer