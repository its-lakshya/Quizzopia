import { configureStore } from "@reduxjs/toolkit"
import SignInSlice from "./SignInSlice"

const Store = configureStore ({
    reducer : {
        signInDetails : SignInSlice,
    }
})

export default Store;