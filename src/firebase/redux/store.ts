import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/AuthReducer";

const stort = configureStore({
    reducer: {
        authReducer
    },
})
export default stort;