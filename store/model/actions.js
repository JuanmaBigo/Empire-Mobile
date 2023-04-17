import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REACT_APP_URL } from '@env'

const getAllCars = createAsyncThunk(
  'getAll',
  async () => {
    try {
<<<<<<< HEAD

      const response = await axios.get(`https://empire-back.onrender.com/api/cars`);

=======
      let url = `${REACT_APP_URL}cars`;
      const response = await axios.get(url);
>>>>>>> 1688db9b8c7a1fbaa4455e4eeec7cdc3f6341b77
      return {
        cars: response.data.car,
      };
    } catch (error) {
      console.log(error);
    }
  });

<<<<<<< HEAD

  

  const getOne = createAsyncThunk('getOne', async ({_id})=>{
    try{
      const response = await axios.get(`https://empire-back.onrender.com/api/cars/${_id}`)

      //console.log(response)
=======
  const getOne = createAsyncThunk('getOne', async ({_id})=>{
    try{
      let url = `${REACT_APP_URL}cars/${_id}`;
      const response = await axios.get(url)
>>>>>>> 1688db9b8c7a1fbaa4455e4eeec7cdc3f6341b77
      return{
        cars: response.data.response,
        
      }
    }catch(error){
      console.log(error)
    }
  });


const actions = { getAllCars,getOne};

<<<<<<< HEAD

export default actions;

=======
export default actions;
>>>>>>> 1688db9b8c7a1fbaa4455e4eeec7cdc3f6341b77
