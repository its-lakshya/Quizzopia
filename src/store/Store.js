import { configureStore } from "@reduxjs/toolkit"
import SignInSlice from "./SignInSlice"
import QuestionsSlice from "./QuestionsSlice";
import ScoreSlice from "./ScoreSlice";

const Store = configureStore ({
    reducer : {
        signInDetails : SignInSlice,
        questionsDetails:QuestionsSlice,
        scoreDetails:ScoreSlice,
    }
})

export default Store;