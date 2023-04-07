import { createReducer } from "@reduxjs/toolkit";
import modalDelete from "./actions";

const { showDeleteModal } = modalDelete

const inittialState = {
    state: false,
    id: ''
}

const reducer = createReducer(
    inittialState,
    (builder) => builder
        .addCase(
            showDeleteModal,
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
