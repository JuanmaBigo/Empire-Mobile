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


const actions = { getAllCars };

export default actions;

