import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserWithId } from "./interface";

const DEFAULT_STATE = [
    {
        id: 1,
        name: "userName",
        email: "user@gmail.com",
      },
      
];



const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("_redux_state_");
    
    return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;

})();


export const usersSlice = createSlice({
    name: "users",
    initialState: "",
    reducers: {
        
    },
});

export default usersSlice.reducer;

export const { } = usersSlice.actions;