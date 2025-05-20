import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const initialState: {
  status: 'all' | 'complated' | 'todo'
} = {
  status: 'all'
}

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: initialState,
  reducers: {
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    }
  },
});

const { reducer, actions } = filterSlice;

export const filterActions = actions

export default persistReducer({ key: "filter", storage }, reducer);
