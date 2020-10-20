import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { filtersReducer } from "./reducers/filtersReducer";
import { pizzasReducer } from "./reducers/pizzasReducer";


export const rootReducer = combineReducers({
    cartReducer,
    filtersReducer,
    pizzasReducer,
})