import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REACT_APP_URL } from '@env'

const getAllCategories = createAsyncThunk(
  'getAllCategories',
  async () => {
    try {
      let url = `${REACT_APP_URL}categories`;
      const response = await axios.get(url);
      return { categories: response.data.response }; 
    } catch (error) {
      console.error(error);
    }
  }
);

const actions = {  getAllCategories };

export default actions;