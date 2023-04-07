import { createAction } from "@reduxjs/toolkit";

let reloadDrawer = createAction(
    'reloadDrawer',
    ({ state }) => {
        return {
            payload: {
                state: state
            }
        }
    }
)

const drawerActions = {reloadDrawer}
export default drawerActions