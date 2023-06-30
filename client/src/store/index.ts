import {AnyAction, Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import { persistReducer, persistStore,   FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import { useDispatch } from 'react-redux'


const rootReducer = combineReducers({
    user:authSlice
})

const persistConfig = {
  key:"root",
  version:1,
  // blacklist:["user"],
  storage
}


// const appReducer:Reducer = (state:RootState,action:AnyAction) => {
//   if(action.type === "user/clearResults"){
//     storage.removeItem("persist:root")

//     state = {} as RootState
//   }
//   return rootReducer(state,action)
// }

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

})
// export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export const AppDispatch : () => typeof store.dispatch = useDispatch;