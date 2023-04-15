import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

let get_colors = createAsyncThunk(
    'get_colors',
    ({_id, headers}) => {
        if (!_id) {
            return "not valid id"
        }
        try {
            let response =  axios.get(
                `https://empire-back.onrender.com/api/colors`,
                // handleToken()
            )
            console.log(response.data.response) 

            return {
                response: { colors: response.data.response },
                message: "These are the colors"
            } 
        } catch (error) {
            return {
                response: { colors: error.response.data },
                message: "error obtained manga",
            }
        }
    })

const colorsActions = {get_colors}
export default colorsActions
