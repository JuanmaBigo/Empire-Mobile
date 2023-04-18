import { createReducer } from "@reduxjs/toolkit";
import action_AllCars from './actions.js'

const { getAllCars, getOne } = action_AllCars
const initialState = {
  car: [],
  cars: [],

};


const reducer = createReducer(
  initialState,
  (builder) => builder
    .addCase(
      getAllCars.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          cars: action.payload.cars
        }
        return newState
      }
    )
    .addCase(
      getOne.fulfilled,
      (state, action) => {
        let newState = {
          ...state,
          car: action.payload.cars
        }
        return newState
      }
    )

)

export default reducer
