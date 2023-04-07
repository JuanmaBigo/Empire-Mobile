import { createReducer } from "@reduxjs/toolkit";
import drawerActions from './actions'

const { reloadDrawer } = drawerActions

const initialState = {
    state: false,
}

const drawerReducer = createReducer(
    initialState,
    (builder) => builder
        .addCase(
            reloadDrawer,
            (state, action) => {
                let newState = {
                    ...state,
                    state: action.payload.state,
                }
                return newState
            }
        )
)

export default drawerReducer