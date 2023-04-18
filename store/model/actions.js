import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REACT_APP_URL } from '@env'

const getAllCars = createAsyncThunk(
  'getAll',
  async () => {
    try {
      let url = `${REACT_APP_URL}cars`;
      const response = await axios.get(url);
      return {
        cars: response.data.car,
      };
    } catch (error) {
      console.log(error);
    }
  });

  const getOne = createAsyncThunk('getOne', async ({_id})=>{
    try{
      let url = `${REACT_APP_URL}cars/${_id}`;
      const response = await axios.get(url)
      return{
        cars: response.data.response,
        
      }
    }catch(error){
      console.log(error)
    }
  });


const actions = { getAllCars,getOne};

export default actions;
