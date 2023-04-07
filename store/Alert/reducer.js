import { createReducer } from "@reduxjs/toolkit"
import alertActions from "./actions"

const { open,close } = alertActions

const initialState = {
    visible: false,
    icon: 'warning',
    text: ''
}

let alertReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            open,
            (state,action) => {
                let newState = {
                    ...state,
                    visible: action.payload.visible,
                    icon: action.payload.icon,
                    text: action.payload.text
                }
                return newState
            }
        )
        .addCase(
            close,
            (state,action) => {
                let newState = {
                    ...state,
                    visible: action.payload.visible,
                    icon: action.payload.icon,
                    text: action.payload.text
                }
                return newState
            }
        )
)

export default alertReducer