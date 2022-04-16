import { createSlice } from "@reduxjs/toolkit";

//in this file we are generating a auth slice reducer and manipulating the state
const authReducerFn = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {

        //manipulating the state 
        logIn(state) {
            state.isLoggedIn = true
        },

        logOut(state) {

            state.isLoggedIn = false
        },
    }
})


export const AuthActions = authReducerFn.actions
export default authReducerFn;