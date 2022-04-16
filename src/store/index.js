import { configureStore } from "@reduxjs/toolkit";
import authReducerFn from "./Auth-slice";

const store = configureStore({
    reducer: {
        auth: authReducerFn.reducer
    }

});

export default store;