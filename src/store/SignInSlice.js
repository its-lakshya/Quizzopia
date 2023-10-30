import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
    name:'signInDetails',
    initialState:{
        name:'',
        password:'',
    },

    reducers:{
        storeLoginName:(state, action)=>{
            state.name = action.payload;
        },
        storeLoginPassword:(state, action)=>{
            // state.name:action.payload
            state.password = action.payload;
        },
    }
})

export const {storeLoginName, storeLoginPassword} = SignInSlice.actions;
export default SignInSlice.reducer;