import { createAction } from "@reduxjs/toolkit";

let captureText = createAction(
    'captureText',
    ({ inputText}) =>{

        return{
            payload:{text: inputText}
        }
        
    }
)

const actions = {captureText}

export default actions