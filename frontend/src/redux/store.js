import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from './authSlice'
import {persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: "auth",
  storage,
};


const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: persistedAuthReducer,
  },
 
});

const persistor = persistStore(store);  // Create a persistor for the store

export  { store, persistor };
