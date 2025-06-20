import React from "react";
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    sidebar: false,
    items: [],
    total_amount: 0
}
console.log(initialState.items);

let cart_reducer = (createSlice({
    name: "cart_reducer",
    initialState,
    reducers: {
        toogle_sidebar: (state) => {
            state.sidebar = !state.sidebar
        },
        Add_to_cart: (state, action) => {
            let crt_item = action.payload

            let exixting_item = state.items.find(item => crt_item.id === item.id)
            if (exixting_item) {
                exixting_item.quantity += 1
            }
            else {
                state.items.push(action.payload)
            }
            update_amount(state)
        }
    }
}))

function update_amount(state) {
    state.total_amount = state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0)

}


export let { toogle_sidebar, Add_to_cart } = cart_reducer.actions
export default cart_reducer.reducer