import { configureStore } from "@reduxjs/toolkit"
import SignInSlice from "./SignInSlice"
import ScoreSlice from "./ScoreSlice";

const Store = configureStore ({
    reducer : {
        signInDetails : SignInSlice,
        scoreDetails:ScoreSlice,
    }
})

export default Store;