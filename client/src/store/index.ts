import {configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer:{
        user:authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export const AppDispatch : () => typeof store.dispatch = useDispatch;