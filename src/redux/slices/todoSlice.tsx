import { mockData } from "@/data/mockData";
import { Todo } from "@/models/Todo";
import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState: {
  todos: Array<Todo>
} = {
  todos: mockData.todos
}

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    updateTodo(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload.id) as Todo
      if (!todo) return
      const updateData = action.payload.updateData as Todo
      Object.assign(todo, updateData)
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => {
        return todo.id != action.payload.id
      })
    }
  },
});

const { reducer, actions } = todoSlice;

export const todoActions = actions

export default persistReducer({ key: "todos", storage }, reducer);
