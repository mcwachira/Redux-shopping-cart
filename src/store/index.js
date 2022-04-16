import { configureStore } from "@reduxjs/toolkit";
import authReducerFn from "./Auth-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        auth: authReducerFn.reducer,
        cart: cartSlice.reducer
    }

});

export default store;