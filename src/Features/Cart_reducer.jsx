import React from "react";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    sidebar: false,
    items: [],
    total_amount: 0
}

let cart_reducer = (createSlice({
    name: "cart_reducer",
    initialState,
    reducers: {
        toogle_sidebar: (state) => {
            state.sidebar = !state.sidebar
        }
    }
}))


export let { toogle_sidebar } = cart_reducer.actions
export default cart_reducer.reducer