import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllCars = createAsyncThunk(
  'getAll',
  async () => {
    try {

      const response = await axios.get(`https://empire-back.onrender.com/api/cars`);

      return {
        cars: response.data.car,
      };
    } catch (error) {
      console.log(error);
    }
  });


  

  const getOne = createAsyncThunk('getOne', async ({_id})=>{
    try{
      const response = await axios.get(`https://empire-back.onrender.com/api/cars/${_id}`)

      //console.log(response)
      return{
        cars: response.data.response,
        
      }
    }catch(error){
      console.log(error)
    }
  });


const actions = { getAllCars,getOne};


export default actions;

