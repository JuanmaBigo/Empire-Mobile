import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


// const handleToken = () => {
//     const BEARER_TOKEN = localStorage.getItem("token")

//     let config = {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${BEARER_TOKEN}`,
//         },
//     }
//     return config
// }

const get_car = createAsyncThunk("get_car", async ({_id, headers}) => {
    try {
        let response = await axios.get(
            `https://empire-back.onrender.com/api/cars/${_id}`,
            // handleToken()
        )
        // console.log(response.data.response.car)
        return {
            response: { car: response.data.response },
            name: response.data.response.name,
            price: response.data.response.price,
            message: "car obtained"
        } 
    } catch (error) {
        return {
            response: { car: error.response.data },
            message: "error obtained manga",
        }
    }
})

const carActions = { get_car }
export default carActions