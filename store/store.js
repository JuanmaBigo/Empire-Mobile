import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from './Drawer/reducer' 
import modelReducer from "./model/reducer"
import categoriesReducer from './categories/reducer'
import colorReducer from "./color/reducer";
import rimsReducer from "./rims/reducer.js";

export const store = configureStore({
    reducer:{
        drawerReducer: drawerReducer,
        model: modelReducer,
        category: categoriesReducer,
        colors: colorReducer,
        rim: rimsReducer,
    }
})