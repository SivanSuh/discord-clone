import {combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    user:authSlice
})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export const AppDispatch : () => typeof store.dispatch = useDispatch;