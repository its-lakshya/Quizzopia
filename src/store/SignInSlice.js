import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
    name:'signInDetails',
    initialState:{
        details:[],
    },

    reducers:{
        storeDetails:(state, action) => {
            state.details.push(action.payload)
        }
    }
})

export const {storeDetails} = SignInSlice.actions;
export default SignInSlice.reducer;