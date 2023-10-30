import { createSlice } from "@reduxjs/toolkit";

const SignInSlice = createSlice({
    name:'signInDetails',
    initialState:{
        details:[],
        currentUser:''
    },

    reducers:{
        storeDetails:(state, action) => {
            state.details.push(action.payload)
        },
        storeCurrentUser:(state, action)=> {
            state.currentUser = action.payload
        }
    }
    
})

export const {storeDetails, storeCurrentUser} = SignInSlice.actions;
export default SignInSlice.reducer;