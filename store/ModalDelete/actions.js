import { createAction } from "@reduxjs/toolkit";

let showDeleteModal = createAction(
    'showDeleteModal',
    ({ state, id }) => {
        return {
            payload: {
                state: state,
                id: id
            }
        }
    }
)

const modalDelete = { showDeleteModal}

export default modalDelete