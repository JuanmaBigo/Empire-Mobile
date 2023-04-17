import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from './Drawer/reducer' 
<<<<<<< HEAD
import modelReducer from './model/reducer'
import categoriesReducer from './categories/reducer'

=======
import modelReducer from "./model/reducer"
import categoriesReducer from './categories/reducer'
import colorReducer from "./color/reducer";
import rimsReducer from "./rims/reducer.js";
>>>>>>> 1688db9b8c7a1fbaa4455e4eeec7cdc3f6341b77

export const store = configureStore({
    reducer:{
        drawerReducer: drawerReducer,
<<<<<<< HEAD

        model: modelReducer,
        category: categoriesReducer

=======
        model: modelReducer,
        category: categoriesReducer,
        colors: colorReducer,
        rim: rimsReducer,
>>>>>>> 1688db9b8c7a1fbaa4455e4eeec7cdc3f6341b77
    }
})