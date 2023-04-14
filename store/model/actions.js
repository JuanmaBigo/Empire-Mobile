import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllCars = createAsyncThunk(
  'getAll',
  async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/cars`);
      return {
        cars: response.data.car,
      };
    } catch (error) {
      console.log(error);
    }
  });

  const getOne = createAsyncThunk('getOne', async ()=>{
    try{
      const response = await axios.get(`http://localhost:8080/api/cars/64377af4968955ae96af8fa8`)
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