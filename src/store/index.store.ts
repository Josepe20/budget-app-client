import { configureStore, type Middleware } from "@reduxjs/toolkit";
import authReducer from '@/modules/AUTH/users/user.store';


const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("authData", JSON.stringify(store.getState()));
};


export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(persistanceLocalStorageMiddleware),
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//////////////////////
