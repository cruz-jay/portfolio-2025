import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../redux/slices";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
