import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import Cartreducer from "./Features/Cart_reducer";

let store = configureStore({
    reducer: {
        cart: Cartreducer
    }
});
export default store;