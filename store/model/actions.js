import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllCars = createAsyncThunk(
  'getAll',
  async () => {
    try {
<<<<<<< HEAD
      const response = await axios.get(`https://empire-back.onrender.com/api/cars`);
=======
<<<<<<< HEAD
      const response = await axios.get(`http://localhost:8080/api/cars`);
=======
      const response = await axios.get(`https://empire-back.onrender.com/api/cars`);
>>>>>>> c616c9c66ce24bc07b82c891528ebe8f7d197c86
>>>>>>> 2019a806883fa9a5624d4743b5be0828998fcc0c
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
      const response = await axios.get(`http://localhost:8080/api/cars/${_id}`)
=======
<<<<<<< HEAD
  const getOne = createAsyncThunk('getOne', async ()=>{
    try{
      const response = await axios.get(`http://localhost:8080/api/cars/64377af4968955ae96af8fa8`)
=======
  const getOne = createAsyncThunk('getOne', async ({_id})=>{
    try{
      const response = await axios.get(`http://localhost:8080/api/cars/${_id}`)
>>>>>>> c616c9c66ce24bc07b82c891528ebe8f7d197c86
>>>>>>> 2019a806883fa9a5624d4743b5be0828998fcc0c
      //console.log(response)
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
<<<<<<< HEAD
export default actions;
=======
export default actions;

>>>>>>> c616c9c66ce24bc07b82c891528ebe8f7d197c86
>>>>>>> 2019a806883fa9a5624d4743b5be0828998fcc0c
