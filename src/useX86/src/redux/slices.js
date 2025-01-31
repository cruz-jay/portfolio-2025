import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
  answer: null,
  points: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    dataReceived: (state, action) => {
      state.questions = action.payload;
      state.status = "ready";
    },
    dataFailed: (state) => {
      state.status = "error";
    },
    start: (state) => {
      state.status = "active";
    },
    newAnswer: (state, action) => {
      const question = state.questions.at(state.index);
      state.answer = action.payload;
      const isCorrect =
        Array.isArray(action.payload) &&
        action.payload.length === question.correctOption.length &&
        action.payload.every((x) => question.correctOption.includes(x)) &&
        question.correctOption.every((x) => action.payload.includes(x));

      state.points = isCorrect ? state.points + question.points : state.points;
    },
    newQuestion: (state) => {
      state.index += 1;
      state.answer = null;
    },
    finish: (state) => {
      state.status = "finish";
    },
    reset: (state) => {
      state.index = 0;
      state.answer = null;
      state.points = 0;
      state.status = "ready";
    },
  },
});

export const {
  dataReceived,
  dataFailed,
  start,
  newAnswer,
  newQuestion,
  finish,
  reset,
} = quizSlice.actions;

export default quizSlice.reducer;
