import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productsData: [],
        productsLoading: false,
        productsErroMsg: null
    },
    reducers: {
        getProductReq: (state, action) => {
            state.productsLoading = true;
            // console.log(action, "state")
        },
        getProductSuccess: (state, action) => {
            state.productsData = action.payload;
            state.productsLoading = false;
            state.productsErroMsg = null;
        },
        getProductFailure: (state, action) => {
            state.productsLoading = false;
            state.productsErroMsg = action.payload;
        },
        getProductLoading: (state) => {
            state.productsLoading = true
            state.productsErroMsg = null;
        },
        getProductClear: (state) => {
            state.productsData = [];
            state.productsLoading = false
            state.productsErroMsg = null;
        },
    }
})

export const { getProductFailure, getProductClear, getProductReq, getProductSuccess, getProductLoading } = ProductSlice.actions
export default ProductSlice.reducer