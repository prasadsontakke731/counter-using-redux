import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import toggleSlice from "./toggleSlice";
import todoSlice from "./todoSlice";
const appStore = configureStore({
    reducer: {
        counter: counterSlice,
        toggle: toggleSlice,
        todo: todoSlice
    }
})

export default appStore