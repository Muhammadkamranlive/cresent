import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import userSlice from "./slice/userSlice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
const reducers = combineReducers({
      auth: authReducer,
      user: userSlice, 
});
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer
});
