import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
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
        },
        getAuthFailure: (state, action) => {
            state.loginData = action.payload;
            state.loginLoading = false;
        },
        getAuthLoading: (state) => {
            state.loginLoading = true
        },
    }
})

export const { getAuthFailure, getAuthFetch, getAuthSuccess, getAuthLoading } = UserSlice.actions
export default UserSlice.reducer