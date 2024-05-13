import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: ["first"],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        }
    }
})


export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer