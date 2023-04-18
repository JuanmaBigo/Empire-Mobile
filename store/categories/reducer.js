import { createReducer } from "@reduxjs/toolkit";
import action_AllCategories from './actions.js'

const { getAllCategories} = action_AllCategories
const initialState = {
    categories:[],
};


const reducer = createReducer ( 
  initialState, 
  (builder) => builder
    .addCase(
      getAllCategories.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          categories: action.payload.categories
        }
        return newState
      }
    )
);


export default reducer
