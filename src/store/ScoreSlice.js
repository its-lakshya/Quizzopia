import { createSlice } from "@reduxjs/toolkit";

const ScoreSlice = createSlice({
    name:'scoreDetails',
    initialState:{
        count:0,
    },

    reducers:{
        increaseCount:(state,action)=>{
            state.count++;
            console.log(state.count)
        }
    }
})

export const {increaseCount} = ScoreSlice.actions
export default ScoreSlice.reducer;