import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllCategories = createAsyncThunk(
  'getAllCategories',
  async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/categories');
      return { categories: response.data.response }; 
    } catch (error) {
      console.error(error);
    }
  }
);

const actions = {  getAllCategories };

export default actions;