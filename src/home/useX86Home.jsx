import ProjectShowcase from "./ProjectShowcase";

const UseX86Home = () => {
  const projectData = {
    title: "x86 Assembly Quiz",
    techStack: [
      {
        name: "React + Redux Toolkit",
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
    ],
    codePreviews: [
      {
        code: `
// App.jsx - Routes 7 main routes w/ 3 having sub routes 

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "showcase_1",
      element: <UseCertHome />,
    },
    {
      path: "showcase_2",
      element: <UseMapHome />,
    },
    {
      path: "showcase_3",
      element: <UseX86Home />,
    },    
    {
      path: "useX86",
      element: <ASM_LAYOUT />,
      children: [
    {
      path: "",
      element: <MainPage />,
    },
    {
      path: "data",
      element: <DataPage />,
      },
    ],
  },

function App() {
  return <RouterProvider router={router} />;
}

export default App;
        `,
        description: "Current State of Route via React Router",
      },
      {
        code: `
// slices.js - initial states & reducers      

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

`,
        description: "Current State for utilizing redux-toolkit",
      },
      {
        code: `Data.jsx - Fetching data from my supabase database

import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase";

const Data = () => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchScores() {
      try {
        const { data, error } = await supabase
          .from("x86asm")
          .select("*")
          .order("score", { ascending: false });

        if (error) throw error;
        setScores(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchScores();
  }, []);

===============================================================

supabase.js - Setting up and connecting to supabase client

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = " {} ";
const supabaseKey = " {} "; 

export const supabase = createClient(supabaseUrl, supabaseKey);

  `,
        description: "Progress tracking with Supabase integration",
      },
    ],
    demoLink: "/useX86",
    videoFile: "/mp4/one.mp4",
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseX86Home;
