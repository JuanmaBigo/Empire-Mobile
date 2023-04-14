import { configureStore } from "@reduxjs/toolkit";
import textReducer from './search/reducer'
import mangaReducer from './Mangas/reducer'
import checkReducer from './checks/reducer'
import alertReducer from './Alert/reducer'
import authorReducer from './AuthorProfile/reducer'
import getmangas_reducer from './MyMangas/reducer'
import modalDelete_reducer from  './ModalDelete/reducer'
import modalEdit_reducer from './ModalEdit/reducer'
import drawerReducer from './Drawer/reducer' 
<<<<<<< HEAD
import modelReducer from './model/reducer'
import categoriesReducer from './categories/reducer'
=======
<<<<<<< HEAD
import modelReducer from "./model/reducer"
=======
import modelReducer from './model/reducer'
import categoriesReducer from './categories/reducer'
>>>>>>> c616c9c66ce24bc07b82c891528ebe8f7d197c86
>>>>>>> 2019a806883fa9a5624d4743b5be0828998fcc0c

export const store = configureStore({
    reducer:{
        text: textReducer,
        mangas: mangaReducer,
        checks: checkReducer, 
        alert: alertReducer,
        author:authorReducer,
        getmangas: getmangas_reducer,
        showModalDelete: modalDelete_reducer,
        showModalEdit: modalEdit_reducer,
        drawerReducer: drawerReducer,
<<<<<<< HEAD
        model: modelReducer,
        category: categoriesReducer
=======
<<<<<<< HEAD
        model:modelReducer
=======
        model: modelReducer,
        category: categoriesReducer
>>>>>>> c616c9c66ce24bc07b82c891528ebe8f7d197c86
>>>>>>> 2019a806883fa9a5624d4743b5be0828998fcc0c
    }
})