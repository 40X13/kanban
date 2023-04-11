import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeIsAuthStatus:(state,action) => {
            state.isAuth=action.payload;
        },
        changeIsAuthStatus1:(state,action) => {
            state.isAuth=action.payload;
        },
    },
})


export const { changeIsAuthStatus, } = authSlice.actions

export default authSlice.reducer