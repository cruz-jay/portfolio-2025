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
        code: `// Redux Slice Implementation
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
    }
  },
});`,
        description: "Core Redux state management implementation",
      },
      {
        code: `// Quiz Component Implementation
function Quiz() {
  const questions = useSelector((state) => state.quiz.questions);
  const status = useSelector((state) => state.quiz.status);
  
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch(dataReceived(data));
      } catch (err) {
        dispatch(dataFailed());
      }
    }
    fetchQuestions();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer />
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}`,
        description:
          "Main quiz interface with React hooks and conditional rendering",
      },
      {
        code: `// Progress Tracking Implementation
const trackProgress = async (userId, score) => {
  const { data, error } = await supabase
    .from('progress')
    .upsert({ 
      user_id: userId,
      quiz_score: score,
      completed_at: new Date(),
      questions_attempted: totalQuestions,
      time_spent: timeElapsed
    })
  
  if (error) {
    console.error('Error saving progress:', error)
    return false
  }
  
  return data
}

// Usage in quiz completion
const finishQuiz = async () => {
  const finalScore = calculateScore()
  await trackProgress(currentUser.id, finalScore)
  dispatch(quizCompleted(finalScore))
}`,
        description: "Progress tracking with Supabase integration",
      },
    ],
    demoLink: "/useX86",
  };

  return <ProjectShowcase {...projectData} />;
};

export default UseX86Home;
