import { createReducer } from "@reduxjs/toolkit";
import modalEdit from "./actions";

const { showModalEdit } = modalEdit

const initialState = {
    state: false,
    id: ''
}

const reducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            showModalEdit,
            ( state, actions ) => {
                let newState = {
                    ...state,
                    state: actions.payload.state,
                    id: actions.payload.id
                }
                return newState
            }
        )
)

export default reducer