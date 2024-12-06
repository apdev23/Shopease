import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginData: {},
        loginLoading: false,
        loginbMsg: null
    },
    reducers: {
        getAuthFetch: (state, action) => {
            state.loginLoading = true;
            // console.log(action, "state")
        },
        getAuthSuccess: (state, action) => {
            state.loginData = action.payload;
            state.loginLoading = false;
            state.loginbMsg = null;
        },
        getAuthFailure: (state, action) => {
            state.loginLoading = false;
            state.loginbMsg = action.payload;
        },
        getAuthLoading: (state) => {
            state.loginLoading = true
            state.loginbMsg = null;
        },
    }
})

export const { getAuthFailure, getAuthFetch, getAuthSuccess, getAuthLoading } = authSlice.actions
export default authSlice.reducer