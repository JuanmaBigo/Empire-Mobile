import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../configHost";

const my_mangas = createAsyncThunk(
    'my_mangas',
    async({ token }) => {
    let url = apiUrl + 'mangas/me'
        let headers = { headers: { 'Authorization': `Bearer ${token}`}}
        try {
            let response = await axios.get(url,headers)
            
            return { mangas: response.data.mangas}
        } catch (error) {
            console.log(error);
            return {
                myMangas: []
            }
            
        }
    }
)

const getmangas = { my_mangas }
export default getmangas 