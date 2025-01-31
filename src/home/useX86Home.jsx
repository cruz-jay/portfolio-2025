import React from "react";
import ProjectShowcase from "./ProjectShowcase";

const UseX86Home = () => {
  const projectData = {
    title: "x86 Assembly Quiz Platform",
    description:
      "An educational platform designed to help students learn x86 assembly language through interactive quizzes and immediate feedback. Features a clean, intuitive interface and comprehensive progress tracking.",
    techStack: [
      {
        name: "React + Redux",
        description: "Frontend with robust state management",
      },
      {
        name: "Redux Toolkit",
        description: "Modern Redux development",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling",
      },
      {
        name: "Supabase",
        description: "Question bank and progress storage",
      },
      {
        name: "React Router",
        description: "Navigation and routing",
      },
      {
        name: "Redux Persist",
        description: "State persistence",
      },
    ],
    features: [
      {
        title: "Interactive Quizzes",
        description:
          "Dynamically generated quizzes with multiple-choice questions on x86 assembly concepts",
      },
      {
        title: "Progress Tracking",
        description:
          "Detailed progress monitoring with performance statistics and improvement suggestions",
      },
      {
        title: "Immediate Feedback",
        description:
          "Real-time feedback on answers with explanations and learning resources",
      },
      {
        title: "Topic Categories",
        description:
          "Organized learning paths covering different aspects of x86 assembly",
      },
    ],
    demoLink: "/useX86",
    codePreview: `// Redux Slice Implementation
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  status: "ready",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    dataReceived(state, action) {
      state.questions = action.payload;
      state.status = "ready";
    },
    dataFailed(state) {
      state.status = "error";
    },
    start(state) {
      state.status = "active";
      state.secondsRemaining = state.questions.length * 30;
    },
    newAnswer(state, action) {
      const question = state.questions.at(state.index);
      state.answer = action.payload;
      state.points += action.payload === question.correctOption ? 10 : 0;
    }
  },
});`,
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseX86Home;
