import React, { act } from "react";
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
        },
        del: (state, action) => {
            let id = action.payload.id
            state.items = state.items.filter((item => item.id !== id))
            update_amount(state)
        },
        incr: (state, action) => {
            let id = action.payload.id
            let item = state.items.find(i => i.id === id)

            if (item) {
                item.quantity += 1
            }
            update_amount(state)
        },
        decr: (state, action) => {
            let id = action.payload.id;
            let item = state.items.find(i => i.id === id);

            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(ele => ele.id !== id);
                }
            }

            update_amount(state);
        }

    }
}))

function update_amount(state) {
    state.total_amount = Number(
        state.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
    );
}



export let { toogle_sidebar, Add_to_cart, del, incr, decr } = cart_reducer.actions
export default cart_reducer.reducer