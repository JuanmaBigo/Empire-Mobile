import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { REACT_APP_URL } from '@env'

const getAllColors = createAsyncThunk(
    'getAllColors',
    async (_id) => {
        if (!_id) {
            throw new Error('El ID del coche no es válido');
        }
        try {
            let url = REACT_APP_URL + 'colors?car_id=' + _id
            const response = await axios.get(url);
            return { colors: response.data.color };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);


const actions = { getAllColors };

export default actions;