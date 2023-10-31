import { configureStore } from "@reduxjs/toolkit"
import SignInSlice from "./SignInSlice"
import ScoreSlice from "./ScoreSlice";
import AuthenticationSlice from "./AuthenticationSlice";

const Store = configureStore ({
    reducer : {
        signInDetails : SignInSlice,
        scoreDetails:ScoreSlice,
        authenticationDetails:AuthenticationSlice
    }
})

export default Store;