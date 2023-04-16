import carActions from "./Actions";
import { createReducer } from "@reduxjs/toolkit";

const { get_car } = carActions

const initialState = {
    name: "",
    price:  "",
    reservePrice:  "",
    stock:  "",
    description1: "",
    description2: "",
    brand:  "",
    category: "",
    cover_photo: "",
}


const carReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(get_car.fulfilled, (state, action) => {
            // console.log(action.payload.response.car)
            let newState = {
                ...state,
                name: action.payload.response.car.name,
                price: action.payload.response.car.price,
                reservePrice: action.payload.response.car.reservePrice,
                stock: action.payload.response.car.stock,
                description1:action.payload.car.description1,
                description2:action.payload.car.description2,
                brand:action.payload.response.car.brand_id,
                category:action.payload.car.category_id,
                cover_photo:action.payload.response.car.photo,
                
            }
            return newState
        })
        .addCase(get_car.rejected, (state, action) => {
            let newState =  {
                message: "error"
            }
            return newState
        })
})
export default carReducer