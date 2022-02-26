import { combineReducers } from "@reduxjs/toolkit";
import {playerReducer} from "./playerReducer";

export const reducer = combineReducers({
    player:playerReducer,    
})

