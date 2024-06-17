import { configureStore, type Middleware } from "@reduxjs/toolkit";
//import usersReducer, { rollbackUser } from "./users/slice";


export const store = configureStore({
    reducer: {
        
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch