import { createAction } from "@reduxjs/toolkit";

const showModalEdit = createAction(
    'showModalEdit',
    ({ state,id }) => {
        return {
            payload: {
                state: state,
                id: id
            }
        }
    }
)

const modalEdit = { showModalEdit }

export default modalEdit