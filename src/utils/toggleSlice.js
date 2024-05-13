import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: true,
    reducers: {
        toggleMenu: (state, action) => {
            return !state
        }
    }
})

export const { toggleMenu } = toggleSlice.actions
export default toggleSlice.reducer